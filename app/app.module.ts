import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PokemonModule } from './pokemons/pokemon.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ 
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        PokemonModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}