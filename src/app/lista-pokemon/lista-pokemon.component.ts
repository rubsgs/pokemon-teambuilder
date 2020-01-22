import { Component, OnInit } from '@angular/core';
import { pokemonSrc } from '../pokemon-mock.js';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
