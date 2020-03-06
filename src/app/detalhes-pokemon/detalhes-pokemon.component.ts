import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

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

	constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
		this.pokemon = null;
		this.displayModalMove = "none";
		this.displayModalPosicaoTime = "none";
		this.opacityModalMove = 0;
		this.opacityModalPosicaoTime = 0;
	}

	ngOnInit() {
		this.route.paramMap.subscribe(params=>{
			this.pokemonService.getPokemon(+params.get("id")).subscribe(pokemon => {
				this.pokemon = <Pokemon>pokemon;
				if(this.pokemon.moveSet == undefined){
					this.pokemon.moveSet = [];
				}
				console.log("ngInit");
				console.log(this.pokemon);
			});
		});
	}

	exibirMoves(){
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
				console.log("exibirPosicaoPokemon");
				console.log(this.pokemon);
				resolve(true);
			}, 50)
		})
	}
}
