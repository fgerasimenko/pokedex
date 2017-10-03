import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon } from './pokemon.model';

import { PokemonService } from './pokemon.service';
import { Type } from './pokemon-type.model';
import { Stats } from './../interfaces/stats-interface';

@Component({
    moduleId: module.id,
    selector: 'pokemon-detalhe',
    templateUrl: './pokemon-detalhe.component.html'
    //styleUrls: ['./pokemon-detalhe.component.css']
})
export class PokemonDetalheComponent implements OnInit {
    pokemon: Pokemon;
    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() { 
        this.pokemon = new Pokemon('','','','',[''],Type[0],'',{hp:0,attack:0,defense:0,spAtk:0,spDef:0,speed:0},0);

        this.route.params.forEach((params: Params) =>{
            let number: string = params['number'];
            this.pokemonService.find(number)
            .then((pokemon: Pokemon) => this.pokemon = pokemon);
        })
    }
}