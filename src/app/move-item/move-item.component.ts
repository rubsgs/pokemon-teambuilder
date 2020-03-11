import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoveModel } from '../move-model';

@Component({
	selector: 'app-move-item',
	templateUrl: './move-item.component.html',
	styleUrls: ['./move-item.component.css']
})
export class MoveItemComponent implements OnInit {
	@Input() move: MoveModel
	@Input() readOnly: boolean;
	@Input() adicionarPush: boolean;
	@Output() moveSelecionado = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	selecionaMove(posicao?){
		this.moveSelecionado.emit({"move": this.move, "posicao": posicao});
	}
}
