import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonModel } from './pokemon-model'
import { pokemonSrc } from './pokemon-mock';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	timeAtual: Pokemon[];
	pokemonEscolhido:Pokemon;
	formaEscolhida: string;
	constructor() { 
		this.pokemonEscolhido = null;
		this.formaEscolhida = null;
		this.timeAtual = [pokemonSrc[4], pokemonSrc[5], pokemonSrc[6], pokemonSrc[7], pokemonSrc[8], pokemonSrc[9]];
	}

	getPokemons():Observable<PokemonModel[]> {
		return of(pokemonSrc);
	}

	limpaPokemonEscolhido(){
		this.pokemonEscolhido = null;
	}

	adicionaPokemonTime(pokemon: Pokemon, posicao: number):void {
		this.timeAtual[posicao] = pokemon;
	}

	getTime(){
		return this.timeAtual;
	}
}
