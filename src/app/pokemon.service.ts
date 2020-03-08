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
		let bulba = {
			"id": 1,
			"number": 1,
			"name": "Bulbasaur",
			"className": "bulbasaur",
			"form": null,
			"forms": null,
			"ability": "",
			"nature": null,
			"iv": null,
			"ev": null,
			"abilities": [],
			"moveSet":[{
				"name": "Growl",
				"type": "normal",
				"category": "status",
				"power": 0,
				"accuracy": 100,
				"pp": 40,
				"effect": "Decreases opponent's attack",
				"tm": null,
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
			}],
			"availableMoves": [
				{
					"name": "Tackle",
					"type": "normal",
					"category": "physical",
					"power": 40,
					"accuracy": 100,
					"pp": 35,
					"effect": null,
					"tm": null,
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
				},
				{
					"name": "Growl",
					"type": "normal",
					"category": "status",
					"power": 0,
					"accuracy": 100,
					"pp": 40,
					"effect": "Decreases opponent's attack",
					"tm": null,
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
				},
				{
					"name": "Vine Whipe",
					"type": "grass",
					"category": "physical",
					"power": 45,
					"accuracy": 100,
					"pp": 25,
					"effect": null,
					"tm": null,
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
				},
				{
					"name": "Growth",
					"type": "normal",
					"category": "status",
					"power": 0,
					"accuracy": 100,
					"pp": 20,
					"effect": "Increase user's attack and special attack",
					"tm": null,
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
				},
				{
					"name": "Leech Seed",
					"type": "grass",
					"category": "status",
					"power": 0,
					"accuracy": 90,
					"pp": 10,
					"effect": "Steal target's HP every tun",
					"tm": null,
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
				},
				{
					"name": "Magical Leaf",
					"type": "grass",
					"category": "special",
					"power": 60,
					"accuracy": null,
					"pp": 20,
					"effect": "Always hits",
					"tm": "TM10",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque vitae mauris volutpat porttitor. Suspendisse finibus neque a eros lacinia hendrerit. Maecenas tincidunt vel justo nec blandit. Integer arcu nisi, feugiat sit amet mollis ut, efficitur eu leo. Maecenas dui turpis, tincidunt ut posuere non, ultrices a lacus."
				}
			],
			"stats": {
				"hp": 45,
				"attack": 49,
				"defense": 49,
				"spAttack": 65,
				"spDefense": 65,
				"speed": 45
			}
		};
		this.timeAtual = [bulba,bulba,bulba,bulba,bulba,bulba];
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
		console.log(posicao);
		if(posicao >= 6){
			posicao = 5;
		} else if(posicao == undefined || posicao == null){
			if(qtdPokemon < 6){
				posicao = qtdPokemon;
			} else {
				posicao = 6;
			}
		}

		this.timeAtual[posicao] = pokemon;
		this.sortTimeAtual();
	}
}
