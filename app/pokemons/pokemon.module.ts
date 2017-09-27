import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListaComponent } from './pokemon-lista.component';
import { PokemonDetalheComponent } from './pokemon-detalhe.component';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonService } from './pokemon.service';

@NgModule({
    declarations: [
        PokemonListaComponent,
        PokemonDetalheComponent
    ],
    imports: [ 
        CommonModule,
        PokemonRoutingModule
     ],
    exports: [
        PokemonListaComponent,
        PokemonDetalheComponent
    ],
    providers: [
        PokemonService
    ]
})
export class PokemonModule {}