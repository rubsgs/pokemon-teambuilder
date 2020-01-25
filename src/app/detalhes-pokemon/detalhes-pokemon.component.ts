import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
	selector: 'app-detalhes-pokemon',
	templateUrl: './detalhes-pokemon.component.html',
	styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnInit {
	@Input() pokemon: Pokemon;
	@Input() formaEscolhida: string;
	constructor() {}

	ngOnInit() {
	}
}
