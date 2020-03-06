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

	getTime(){
		return this.timeAtual;
	}

	//As posicoes de timeAtual que são undefined são jogadas para o final do array e retorna a quantidade de elementos que não são undefined(posAtual)
	sortTimeAtual(): number{
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

		return posAtual;
	}

	//adiciona pokemon ao timeAtual, se posicao não for imformada o pokemon será adicionado(ou ira sobrescerver) na ultima posicao
	addTimeAtual(pokemon: Pokemon, posicao?: number){
		let qtdPokemon = this.sortTimeAtual();
		if(posicao >= 6){
			posicao = 5;
		} else if(posicao == undefined || posicao == null){
			if(qtdPokemon < 6){
				posicao = qtdPokemon + 1;
			} else {
				posicao = 6;
			}
		}

		this.timeAtual[posicao] = pokemon;
		this.sortTimeAtual();
	}
}
