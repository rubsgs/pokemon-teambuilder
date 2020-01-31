import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component'


const routes: Routes = [
	{path: 'pokemon/details/:id', component: DetalhesPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
