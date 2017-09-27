import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PokemonListaComponent } from './pokemon-lista.component';

const routes: Routes = [
    { path: 'pokedex', component: PokemonListaComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}
