import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonModel } from '../pokemon-model';

@Component({
	selector: 'app-detalhes-pokemon',
	templateUrl: './detalhes-pokemon.component.html',
	styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnInit {
	pokemon: PokemonModel;
	formaEscolhida: string;
	constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
		this.pokemon = null;
	}

	ngOnInit() {
		this.route.paramMap.subscribe(params=>{
			this.pokemonService.getPokemon(+params.get("id")).subscribe(pokemon => {
				this.pokemon = pokemon;
				console.log(this.pokemon);
			});
		});
		console.log("fim nginit");
	}
}
