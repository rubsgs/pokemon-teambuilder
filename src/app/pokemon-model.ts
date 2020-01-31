import { MoveModel } from './move-model';
export class PokemonModel {
	id: number;
	number: number;
	name: string;
	className: string;
	form: string;
	forms: number[];
	moveSet: MoveModel[];
	abilities: string[];
	stats: {
		hp: number,
		attack: number,
		spAttack: number,
		defense: number,
		spDefense: number,
		speed: number
	};
}
