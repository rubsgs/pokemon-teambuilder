import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StatsModel } from '../stats-model';

@Component({
	selector: 'app-form-customizacao-stat',
	templateUrl: './form-customizacao-stat.component.html',
	styleUrls: ['./form-customizacao-stat.component.css']
})
export class FormCustomizacaoStatComponent implements OnInit {
	@Input() titulo: string;
	@Input() classeContainer: string;
	@Input() classeInput: string;
	@Input() disabled: boolean;
	@Input() statsModel: StatsModel;
	@Output() statsChanged = new EventEmitter();
	formStats;
	
	constructor(private formBuilder: FormBuilder) {
	}

	ngOnInit() {
		console.log(this.statsModel);
	}

	ngOnChanges(){
		this.formStats = this.formBuilder.group({
			hp: this.statsModel != undefined ? this.statsModel.hp : 0,
			attack: this.statsModel != undefined ? this.statsModel.attack : 0,
			defense: this.statsModel != undefined ? this.statsModel.defense : 0,
			spAttack: this.statsModel != undefined ? this.statsModel.spAttack : 0,
			spDefense: this.statsModel != undefined ? this.statsModel.spDefense : 0,
			speed: this.statsModel != undefined ? this.statsModel.speed : 0
		});
	}

	getStats(){
		this.statsModel = <StatsModel>this.formStats.value;
		this.statsChanged.emit(this.statsModel);
	}

}
