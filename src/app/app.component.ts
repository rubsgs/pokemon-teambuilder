import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Pokémon TeamBuilder v0.1';

	constructor(public pokemonService: PokemonService, private router: Router){}

	redirecionaPokemon($event){
		this.router.navigate(["/team/details/"+$event.posicaoTime]);
	}
}
