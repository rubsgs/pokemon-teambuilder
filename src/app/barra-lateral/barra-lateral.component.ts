import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-barra-lateral',
	templateUrl: './barra-lateral.component.html',
	styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

	@Input() pokemon: Pokemon;
	@Input() formaEscolhida: string;
	@Output() pokemonIncluido = new EventEmitter();
	tamanhoAbertura: number;
	
	constructor(private pokemonService: PokemonService) { }

	ngOnInit() {
		this.tamanhoAbertura = 0;
	}

	ngOnChanges(){
		//Se a barra já estiver fechada, o tempo para abertura é de 1 milisegundo, senão é de 500;
		var timeout = 500;
		
		if(this.tamanhoAbertura == 0){
			timeout = 1;
		}

		this.tamanhoAbertura = 0;
		setTimeout(() => {
			console.log(this);
			if(this.pokemon != null){
				this.tamanhoAbertura = 20;
			}
		}, timeout);
	}

	incluir(pokemon: Pokemon, posicao: number){

	}
}
