import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { pokemonSrc } from './pokemon-mock';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { SelecaoTimeComponent } from './selecao-time/selecao-time.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { FormCustomizacaoStatComponent } from './form-customizacao-stat/form-customizacao-stat.component';
import { StatDistributionComponent } from './stat-distribution/stat-distribution.component';

@NgModule({
	declarations: [
		AppComponent,
		ListaPokemonComponent,
		SelecaoTimeComponent,
		DetalhesPokemonComponent,
		BarraLateralComponent,
		FormCustomizacaoStatComponent,
		StatDistributionComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
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
