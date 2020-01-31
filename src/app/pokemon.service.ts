import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonModel } from './pokemon-model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	private pokemonUrl = "api/pokemons";

	timeAtual: Pokemon[];
	pokemonEscolhido:PokemonModel;
	constructor(private http: HttpClient) { 
		this.pokemonEscolhido = null;
		//this.timeAtual = [pokemonSrc[4], pokemonSrc[5], pokemonSrc[6], pokemonSrc[7], pokemonSrc[8], pokemonSrc[9]];
	}

	getPokemons():Observable<PokemonModel[]> {
		//return of(pokemonSrc);
		return this.http.get<PokemonModel[]>(this.pokemonUrl);
	}

	getPokemon(id: number){
		return this.http.get<PokemonModel>(`${this.pokemonUrl}/${id}`);
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
