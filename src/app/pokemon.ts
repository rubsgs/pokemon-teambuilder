import { Nature } from './nature';
import { PokemonModel } from './pokemon-model';
import { MoveModel } from './move-model';
export class Pokemon extends PokemonModel {
	number: number;
	name: string;
	className: string;
	form: string;
	forms: number[];
	moveSet: MoveModel[];
	ability: string;
	nature: Nature;
	stats: {
		hp: number,
		attack: number,
		spAttack: number,
		defense: number,
		spDefense: number,
		speed: number
	};
	iv: {
		hp: number,
		attack: number,
		spAttack: number,
		defense: number,
		spDefense: number,
		speed: number
	};
	ev: {
		hp: number,
		attack: number,
		spAttack: number,
		defense: number,
		spDefense: number,
		speed: number
	}
}