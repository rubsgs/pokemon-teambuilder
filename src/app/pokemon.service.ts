import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon'
import { pokemonSrc } from './pokemon-mock';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	constructor() { }

	getPokemons():Observable<Pokemon[]> {
		return of(pokemonSrc);
	}
}
