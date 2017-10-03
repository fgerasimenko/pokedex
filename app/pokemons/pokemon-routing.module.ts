import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PokemonDetalheComponent } from './pokemon-detalhe.component';
import { PokemonListaComponent } from './pokemon-lista.component';

const routes: Routes = [
    { path: 'pokedex', component: PokemonListaComponent },
    { 
        path: 'pokedex/:number',
        component: PokemonDetalheComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}
