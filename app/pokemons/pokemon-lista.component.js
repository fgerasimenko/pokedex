"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const pokemon_service_1 = require("./pokemon.service");
let PokemonListaComponent = class PokemonListaComponent {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    ngOnInit() {
        this.pokemonService.findAll()
            .then((pokemons) => {
            this.pokemons = pokemons;
        })
            .catch(err => console.log(err));
    }
    getTipo(pkm) {
        let classe;
        if (pkm.name == 'Fogo') {
            classe = 'fire';
        }
        else if (pkm.name == 'Água') {
            classe = 'water';
        }
        else if (pkm.name == 'Grama') {
            classe = 'grass';
        }
        else if (pkm.name == 'Venenoso') {
            classe = 'poison';
        }
        else if (pkm.name == 'Inseto') {
            classe = 'bug';
        }
        else if (pkm.name == 'Voador') {
            classe = 'flying';
        }
        else if (pkm.name == 'Normal') {
            classe = 'normal';
        }
        else if (pkm.name == 'Fada') {
            classe = 'fairy';
        }
        else if (pkm.name == 'Elétrico') {
            classe = 'eletric';
        }
        else if (pkm.name == 'Terra') {
            classe = 'ground';
        }
        else if (pkm.name == 'Gelo') {
            classe = 'ice';
        }
        else if (pkm.name == 'Dragão') {
            classe = 'dragon';
        }
        else if (pkm.name == 'Lutador') {
            classe = 'fighting';
        }
        else if (pkm.name == 'Psiquico') {
            classe = 'psychic';
        }
        else if (pkm.name == 'Pedra') {
            classe = 'rock';
        }
        else
            classe = 'steel';
        return classe;
    }
};
PokemonListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pokemon-lista',
        templateUrl: './pokemon-lista.component.html',
        styleUrls: ['./pokemon.css']
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonListaComponent);
exports.PokemonListaComponent = PokemonListaComponent;
//# sourceMappingURL=pokemon-lista.component.js.map