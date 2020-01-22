import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-lista-pokemon',
	templateUrl: './lista-pokemon.component.html',
	styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
	pokemons: Pokemon[];
	
	constructor(
		private pokemonService: PokemonService
	) { }

	ngOnInit() {
		this.getPokemons();
	}

	getPokemons(): void{
		this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
	}
}
