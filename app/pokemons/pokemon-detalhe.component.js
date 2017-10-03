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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const pokemon_model_1 = require("./pokemon.model");
const pokemon_service_1 = require("./pokemon.service");
const pokemon_type_model_1 = require("./pokemon-type.model");
let PokemonDetalheComponent = class PokemonDetalheComponent {
    constructor(pokemonService, route, location) {
        this.pokemonService = pokemonService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.pokemon = new pokemon_model_1.Pokemon('', '', '', '', [''], pokemon_type_model_1.Type[0], '', { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }, 0);
        this.route.params.forEach((params) => {
            let number = params['number'];
            this.pokemonService.find(number)
                .then((pokemon) => this.pokemon = pokemon);
        });
    }
};
PokemonDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pokemon-detalhe',
        templateUrl: './pokemon-detalhe.component.html'
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService,
        router_1.ActivatedRoute,
        common_1.Location])
], PokemonDetalheComponent);
exports.PokemonDetalheComponent = PokemonDetalheComponent;
//# sourceMappingURL=pokemon-detalhe.component.js.map