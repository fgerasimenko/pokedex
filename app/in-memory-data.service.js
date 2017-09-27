"use strict";
const pokemon_model_1 = require("./pokemons/pokemon.model");
const pokemon_type_model_1 = require("./pokemons/pokemon-type.model");
class InMemoryDataService {
    createDb() {
        let types = [
            { name: 'grama', sprite: '', strongAgainst: pokemon_type_model_1.Type['grama'], weakAgainst: pokemon_type_model_1.Type['grama'], }
        ];
        let pokedex = [
            {
                number: '001',
                name: 'Bulbassauro',
                image: '',
                sprite: ['', ''],
                type: pokemon_type_model_1.Type['grama'],
                passive: 'Teste',
                baseStats: { hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45 },
                evolutionLevel: 1,
                evolution: pokemon_model_1.Pokemon['001']
            },
        ];
        return { types, pokedex };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map