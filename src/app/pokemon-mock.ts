import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PokemonModel } from './pokemon-model';

export class pokemonSrc implements InMemoryDbService{
	createDb(){
		const pokemons = [
			{
				"id": 1,
				"number": "1",
				"name": "Bulbasaur",
				"className": "bulbasaur",
				"form": null,
				"stats": {
					"hp": 45,
					"attack": 49,
					"defense": 49,
					"spAttack": 65,
					"spDefense": 65,
					"speed": 45
				}
			},
			{
				"id": 2,
				"number": "2",
				"name": "Ivysaur",
				"className": "ivysaur",
				"form": null,
				"stats": {
					"hp": 60,
					"attack": 62,
					"defense": 63,
					"spAttack": 80,
					"spDefense": 80,
					"speed": 60
				}
			},
			{
				"id": 3,
				"number": "3",
				"name": "Venosaur",
				"className": "venosaur",
				"form": null,
				"forms": [4],
				"stats": {
					"hp": 80,
					"attack": 82,
					"defense": 83,
					"spAttack": 100,
					"spDefense": 100,
					"speed": 80
				}
			},
			{
				"id": 4,
				"number": "3",
				"name": "Mega Venosaur",
				"className": "venosaur",
				"form": "mega",
				"forms": null,
				"stats": {
					"hp": 80,
					"attack": 100,
					"defense": 123,
					"spAttack": 122,
					"spDefense": 120,
					"speed": 80
				}
			},
			{
				"id": 5,
				"number": "4",
				"name": "Charmander",
				"className": "charmander",
				"form": null,
				"forms": null,
				"stats": {
					"hp": 39,
					"attack": 52,
					"defense": 43,
					"spAttack": 60,
					"spDefense": 50,
					"speed": 65
				}
			},
			{
				"id": 6,
				"number": "5",
				"name": "Charmeleon",
				"className": "charmeleon",
				"form": null,
				"forms": null,
				"stats": {
					"hp": 58,
					"attack": 64,
					"defense": 58,
					"spAttack": 80,
					"spDefense": 65,
					"speed": 80
				}
			},
			{
				"id": 7,
				"number": "6",
				"name": "Charizard",
				"className": "charizard",
				"form": null,
				"forms":[8,9],
				"stats": {
					"hp": 78,
					"attack": 84,
					"defense": 78,
					"spAttack": 109,
					"spDefense": 85,
					"speed": 100
				}
			},
			{
				"id": 8,
				"number": "6",
				"name": "Mega Charizard X",
				"className": "charizard",
				"form": "mega-x",
				"forms": null,
				"stats": {
					"hp": 78,
					"attack": 130,
					"defense": 111,
					"spAttack": 130,
					"spDefense": 85,
					"speed": 100
				}
			},
			{
				"id": 9,
				"number": "6",
				"name": "Mega Charizard Y",
				"className": "charizard",
				"form": "mega-y",
				"forms": null,
				"stats": {
					"hp": 78,
					"attack": 104,
					"defense": 78,
					"spAttack": 159,
					"spDefense": 115,
					"speed": 100
				}
			},
			{
				"id": 10,
				"number": "7",
				"name": "Squirtle",
				"className": "squirtle",
				"form": null,
				"forms": null,
				"stats": {
					"hp": 44,
					"attack": 48,
					"defense": 65,
					"spAttack": 50,
					"spDefense": 64,
					"speed": 43
				}
			},
			{
				"id": 11,
				"number": "8",
				"name": "Wartortle",
				"className": "wartortle",
				"form": null,
				"forms": null,
				"stats": {
					"hp": 59,
					"attack": 63,
					"defense": 80,
					"spAttack": 65,
					"spDefense": 80,
					"speed": 58
				}
			},
			{
				"id": 12,
				"number": "9",
				"name": "Blastoise",
				"className": "blastoise",
				"form": null,
				"forms": [13],
				"stats": {
					"hp": 79,
					"attack": 83,
					"defense": 100,
					"spAttack": 85,
					"spDefense": 105,
					"speed": 78
				}
			},
			{
				"id": 13,
				"number": "9",
				"name": " Mega Blastoise",
				"className": "blastoise",
				"form": "mega",
				"forms": null,
				"stats": {
					"hp": 79,
					"attack": 103,
					"defense": 120,
					"spAttack": 135,
					"spDefense": 115,
					"speed": 78
				}
			}
		];
		return {pokemons}
	}

	genId(pokemons: PokemonModel[]): number{
		return pokemons.length +1;
	}
}