import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-selecao-time',
	templateUrl: './selecao-time.component.html',
	styleUrls: ['./selecao-time.component.css']
})
export class SelecaoTimeComponent implements OnInit {
	@Output() pokemonTimeSelecionado = new EventEmitter();

	constructor(private pokemonService: PokemonService) { }

	ngOnInit() {
	}

}
