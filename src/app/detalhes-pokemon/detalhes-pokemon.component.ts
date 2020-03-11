import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { StatsModel } from '../stats-model';

@Component({
	selector: 'app-detalhes-pokemon',
	templateUrl: './detalhes-pokemon.component.html',
	styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnInit {
	pokemon: Pokemon;
	displayModalMove: string;
	opacityModalMove: number;
	displayModalPosicaoTime: string;
	opacityModalPosicaoTime: number;

	constructor(public pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
		this.pokemon = null;
		this.displayModalMove = "none";
		this.displayModalPosicaoTime = "none";
		this.opacityModalMove = 0;
		this.opacityModalPosicaoTime = 0;
	}

	ngOnInit() {
		this.route.paramMap.subscribe(params=>{
			let posicao = params.get("position");
			let idPokemon = params.get("id");
			if(posicao != null && posicao != undefined){
				let pokemonTime = this.pokemonService.getPokemonPosicao(+posicao);

				if(pokemonTime == null){
					window.alert("Invalid Pokemon!");
					this.router.navigate(["/"]);
					return;
				}

				this.pokemon = pokemonTime;
			} else {
				this.pokemonService.getPokemon(+idPokemon).subscribe(pokemon => {
					this.pokemon = <Pokemon>pokemon;
					if(this.pokemon.moveSet == undefined){
						this.pokemon.moveSet = [];
					}
					if(this.pokemon.iv == undefined){
						this.pokemon.iv = new StatsModel();
					}
					if(this.pokemon.ev == undefined){
						this.pokemon.ev = new StatsModel()
					}
				});
			}
			
		});
	}

	exibirMoves(){
		if(!this.validaEv(this.pokemon.ev)){
			return;
		}

		if(!this.validaIv(this.pokemon.iv)){
			return;
		}

		this.displayModalPosicaoTime = "none";
		this.opacityModalPosicaoTime = 0;
		this.displayModalMove = "flex";

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this.opacityModalMove = 1;
				resolve(true);
			}, 50);
		});
	}

	fecharMoves(){
		this.opacityModalMove = 0;

		return new Promise((resolve,reject) => {
			setTimeout(() => {
				this.displayModalMove = "none";
				resolve(true);
			}, 200);
		});
	}

	adicionarPokemon(){
		let qtdPokemon = this.pokemonService.sortTimeAtual();
		if(qtdPokemon < 6){
			this.pokemonService.addTimeAtual(this.pokemon);
			window.alert(this.pokemon.name + " was added to your team!");
			this.router.navigate(["/"]);
		} else {
			this.exibirPosicaoPokemon();
		}
	}

	exibirPosicaoPokemon(){
		this.displayModalMove = "none";
		this.opacityModalMove = 0;
		this.displayModalPosicaoTime = "flex";
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				this.opacityModalPosicaoTime = 1;
				resolve(true);
			}, 50)
		})
	}

	fecharPosicaoPokemon(){
		this.opacityModalPosicaoTime = 0;
		return new Promise((resolve, reject) => {
			setTimeout(() =>{
				this.displayModalPosicaoTime = "none";
				resolve(true);
			}, 200);
		})
	}

	validaEv($event): boolean{
		let totalEvs = 0;
		let {hp,attack,defense,spAttack,spDefense,speed} = $event;
		
		let hpValido = hp <= 252;
		totalEvs += hp;

		let attValido = attack <= 252;
		totalEvs += attack;

		let defValido = defense <= 252;
		totalEvs += defense;

		let spAttValido = spAttack <= 252;
		totalEvs += spAttack;

		let spDefValido = spDefense <= 252;
		totalEvs += spDefense;

		let spdValido = speed <= 252;
		totalEvs += speed;

		if(totalEvs > 510){
			window.alert("The sum of all EVs must be lower than 510.");
			return false;
		} else {
			if(hpValido && attValido && defValido && spAttValido && spDefValido && spdValido){
				this.pokemon.ev = <StatsModel>$event;
				return true;
			} else {
				window.alert("You can't have an EV higher than 252.");
				return false;
			}
		}
	}

	validaIv($event){
		let totalEvs = 0;
		let {hp,attack,defense,spAttack,spDefense,speed} = $event;
		
		let hpValido = hp <= 31 && hp >= 0;
		totalEvs += hp;

		let attValido = attack <= 31 && attack >= 0;
		totalEvs += attack;

		let defValido = defense <= 31 && defense >= 0;
		totalEvs += defense;

		let spAttValido = spAttack <= 31 && spAttack >= 0;
		totalEvs += spAttack;

		let spDefValido = spDefense <= 31 && spDefense >= 0;
		totalEvs += spDefense;

		let spdValido = speed <= 31 && speed >= 0;
		totalEvs += speed;

		if(hpValido && attValido && defValido && spAttValido && spDefValido && spdValido){
			this.pokemon.iv = <StatsModel>$event;
			return true;
		} else {
			window.alert("IVs must be between 0 and 31");
			return false;
		}
	}
}
