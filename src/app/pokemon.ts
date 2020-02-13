import { Nature } from './nature';
import { PokemonModel } from './pokemon-model';
import { MoveModel } from './move-model';
import { StatsModel } from './stats-model';

export class Pokemon extends PokemonModel {
	number: number;
	name: string;
	className: string;
	form: string;
	forms: number[];
	moveSet: MoveModel[];
	ability: string;
	nature: Nature;
	stats: StatsModel;
	iv: StatsModel;
	ev: StatsModel;
}