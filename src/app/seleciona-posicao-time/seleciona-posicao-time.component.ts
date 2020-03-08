import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-seleciona-posicao-time',
	templateUrl: './seleciona-posicao-time.component.html',
	styleUrls: ['./seleciona-posicao-time.component.css']
})
export class SelecionaPosicaoTimeComponent implements OnInit {
	@Output() pokemonAdicionado = new EventEmitter();
	@Input() pokemon;

	constructor(private pokemonService: PokemonService) { }

	ngOnInit() {
	}

	adicionaPokemon(event){
		this.pokemonService.addTimeAtual(this.pokemon, event.posicaoTime);
		this.pokemonAdicionado.emit();
	}

}
