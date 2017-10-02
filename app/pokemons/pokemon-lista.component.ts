import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';
import { Type } from './pokemon-type.model';

@Component({
    moduleId: module.id,
    selector: 'pokemon-lista',
    templateUrl: './pokemon-lista.component.html',
    styleUrls: ['./pokemon.css', './pokemon-lista.component.css']
})
export class PokemonListaComponent implements OnInit {
    pokemons: Pokemon[];
    tempt: boolean = true;

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
        }else if(pkm.name == 'Venenoso'){
            classe = 'poison'
        }else if(pkm.name == 'Inseto'){
            classe ='bug'
        }else if(pkm.name == 'Voador'){
            classe = 'flying'
        }else if(pkm.name == 'Normal'){
            classe = 'normal'
        }else if(pkm.name == 'Fada'){
            classe = 'fairy'
        }else if(pkm.name == 'Elétrico'){
            classe = 'eletric'
        }else if(pkm.name == 'Terra'){
            classe = 'ground'
        }else if(pkm.name == 'Gelo'){
            classe = 'ice'
        }else if(pkm.name == 'Dragão'){
            classe = 'dragon'
        }else if(pkm.name == 'Lutador'){
            classe = 'fighting'
        }else if(pkm.name == 'Psiquico'){
            classe = 'psychic'
        }else if(pkm.name == 'Pedra'){
            classe = 'rock';
        }else if(pkm.name == 'Aço'){
            classe = 'steel';
        }else if(pkm.name == 'Fantasma'){
            classe = 'ghost'
        }else{
            classe ='dark'
        }
            
        return classe;
    }

    getTipoLista()
    {
            if(this.tempt)
                this.tempt = false;
            else
                this.tempt = true;
    }
}