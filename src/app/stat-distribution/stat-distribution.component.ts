import { Component, OnInit, Input } from '@angular/core';
import { StatsModel } from '../stats-model';

@Component({
	selector: 'app-stat-distribution',
	templateUrl: './stat-distribution.component.html',
	styleUrls: ['./stat-distribution.component.css']
})
export class StatDistributionComponent implements OnInit {
	@Input() statsModel: StatsModel;
	@Input() titulo: string;
	@Input() cor: string;
	constructor() { }

	ngOnInit() {
	}

}
