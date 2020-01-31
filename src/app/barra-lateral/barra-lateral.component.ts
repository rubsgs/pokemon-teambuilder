import { Component, OnInit, Input } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { PokemonModel } from '../pokemon-model';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-barra-lateral',
	templateUrl: './barra-lateral.component.html',
	styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

	@Input() pokemon: PokemonModel;
	tamanhoAbertura: number;
	
	constructor(private pokemonService: PokemonService) { }

	ngOnInit() {
		this.tamanhoAbertura = 0;
	}

	ngOnChanges(){
		//Se a barra já estiver fechada, o tempo para abertura é de 1 milisegundo, senão é de 500;
		var timeout = 300;
		
		if(this.tamanhoAbertura == 0){
			timeout = 1;
		}

		this.tamanhoAbertura = 0;
		setTimeout(() => {
			if(this.pokemon != null){
				this.tamanhoAbertura = 20;
			}
		}, timeout);
	}
}
