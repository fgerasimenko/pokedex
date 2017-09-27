"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const pokemon_lista_component_1 = require("./pokemon-lista.component");
const pokemon_detalhe_component_1 = require("./pokemon-detalhe.component");
const pokemon_routing_module_1 = require("./pokemon-routing.module");
const pokemon_service_1 = require("./pokemon.service");
let PokemonModule = class PokemonModule {
};
PokemonModule = __decorate([
    core_1.NgModule({
        declarations: [
            pokemon_lista_component_1.PokemonListaComponent,
            pokemon_detalhe_component_1.PokemonDetalheComponent
        ],
        imports: [
            common_1.CommonModule,
            pokemon_routing_module_1.PokemonRoutingModule
        ],
        exports: [
            pokemon_lista_component_1.PokemonListaComponent,
            pokemon_detalhe_component_1.PokemonDetalheComponent
        ],
        providers: [
            pokemon_service_1.PokemonService
        ]
    })
], PokemonModule);
exports.PokemonModule = PokemonModule;
//# sourceMappingURL=pokemon.module.js.map