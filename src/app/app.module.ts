import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { SelecaoTimeComponent } from './selecao-time/selecao-time.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    SelecaoTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
