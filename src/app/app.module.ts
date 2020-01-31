import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { pokemonSrc } from './pokemon-mock';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { SelecaoTimeComponent } from './selecao-time/selecao-time.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';

@NgModule({
	declarations: [
		AppComponent,
		ListaPokemonComponent,
		SelecaoTimeComponent,
		DetalhesPokemonComponent,
		BarraLateralComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			pokemonSrc,
			{ dataEncapsulation: false }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
