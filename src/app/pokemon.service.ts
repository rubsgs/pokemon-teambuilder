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
		this.timeAtual = Array(6);
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

	sortTimeAtual(){
		let posAtual = 0;
		for(let i = 0; i < this.timeAtual.length; i++){
			if(this.timeAtual[posAtual] == undefined || this.timeAtual[posAtual] == null){
				let temp = this.timeAtual[posAtual];
				this.timeAtual.splice(posAtual,1);
				this.timeAtual.push(temp);
			} else {
				posAtual++;
			}
		}
	}

	addTimeAtual(pokemon: Pokemon, posicao: number){
		if(posicao >= 6){
			posicao = 5;
		} else if(posicao == undefined || posicao == null){
			posicao = 0;
		}

		this.timeAtual[posicao] = pokemon;
		this.sortTimeAtual();
	}
}
