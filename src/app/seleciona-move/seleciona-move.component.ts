import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
	selector: 'app-seleciona-move',
	templateUrl: './seleciona-move.component.html',
	styleUrls: ['./seleciona-move.component.css']
})
export class SelecionaMoveComponent implements OnInit {
	@Input() pokemon: Pokemon;
	@Output() fechar = new EventEmitter();
	@Output() adicionarPokemon = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(){
	}

	adicionarMove(evento){
		var posicao = evento.posicao;
		var move = evento.move;

		if(this.pokemon.moveSet.indexOf(move) > -1){
			window.alert("Move Already Known!");
			return;
		}

		if(this.pokemon.moveSet.length < 4){
			this.pokemon.moveSet.push(move)
		} else {
			this.pokemon.moveSet[posicao] = move;
		}
	}
}
