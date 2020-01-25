import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon'
import { pokemonSrc } from './pokemon-mock';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	pokemonEscolhido:Pokemon;
	formaEscolhida: string;
	constructor() { 
		this.pokemonEscolhido = null;
		this.formaEscolhida = null;
	}

	getPokemons():Observable<Pokemon[]> {
		return of(pokemonSrc);
	}

	limpaPokemonEscolhido(){
		this.pokemonEscolhido = null;
	}
}
