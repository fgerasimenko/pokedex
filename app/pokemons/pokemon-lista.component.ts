import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';
import { Type } from './pokemon-type.model';

@Component({
    moduleId: module.id,
    selector: 'pokemon-lista',
    templateUrl: './pokemon-lista.component.html',
    styleUrls: ['./pokemon.css']
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

    getTipo(pkm: Type): {}
    {
        
        let classe: {}
        if(pkm.name == 'Fogo')
        {
            classe = 'fire'
        }else if(pkm.name == 'Água'){
            classe = 'water'
        }else if(pkm.name == 'Grama'){
            classe = 'grass'
        }else{
            classe = 'poison'
        }
        return classe;
    }
}