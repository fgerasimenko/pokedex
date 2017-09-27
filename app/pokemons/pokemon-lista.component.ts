import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';

@Component({
    moduleId: module.id,
    selector: 'pokemon-lista',
    templateUrl: './pokemon-lista.component.html'
    //styleUrls: ['./pokemon.component.css']
})
export class PokemonListaComponent implements OnInit {
    pokemons: Pokemon[];
    constructor(
        private pokemonService: PokemonService
    ) { }

    ngOnInit() {
        this.pokemonService.findAll()
        .then((pokemons: Pokemon[]) => {
            this.pokemons = pokemons;
        })
        .catch(err => console.log(err));
     }
}