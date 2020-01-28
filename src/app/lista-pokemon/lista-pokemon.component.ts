import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonModel } from '../pokemon-model';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-lista-pokemon',
	templateUrl: './lista-pokemon.component.html',
	styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
	pokemons: PokemonModel[];
	@Output() pokemonFoiEscolhido = new EventEmitter();
	
	constructor(
		private pokemonService: PokemonService
	) { }

	ngOnInit() {
		this.getPokemons();
	}

	getPokemons(): void{
		this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
	}

	escolhePokemon(evento: any,pokemon: Pokemon, form: string){
		this.pokemonService.pokemonEscolhido = pokemon;
		this.pokemonService.pokemonEscolhido.form = form;
		evento.stopPropagation();
		this.pokemonFoiEscolhido.emit();
	}
}
