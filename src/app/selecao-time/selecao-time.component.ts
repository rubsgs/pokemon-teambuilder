import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-selecao-time',
  templateUrl: './selecao-time.component.html',
  styleUrls: ['./selecao-time.component.css']
})
export class SelecaoTimeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

}
