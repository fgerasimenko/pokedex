"use strict";
const pokemon_model_1 = require("./pokemons/pokemon.model");
const pokemon_type_model_1 = require("./pokemons/pokemon-type.model");
class InMemoryDataService {
    createDb() {
        let types = [
            { id: 1, name: 'Grama', sprite: '', strongAgainst: pokemon_type_model_1.Type['água'], weakAgainst: pokemon_type_model_1.Type['fogo'] },
            { id: 2, name: 'Fogo', sprite: '', strongAgainst: pokemon_type_model_1.Type['grama'], weakAgainst: pokemon_type_model_1.Type['água'] },
            { id: 3, name: 'Água', sprite: '', strongAgainst: pokemon_type_model_1.Type['fogo'], weakAgainst: pokemon_type_model_1.Type['água'] },
            { id: 4, name: 'Venenoso', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
        ];
        let pokedex = [
            {
                number: '001',
                name: 'Bulbassauro',
                desc: 'O Primeiro pokemon da Pokedéx',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Grama'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste',
                baseStats: { hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45 },
                evolutionLevel: 1,
                evolution: pokemon_model_1.Pokemon['001']
            },
            {
                number: '002',
                name: 'Ivyssauro',
                desc: 'Evolução do Bulbassauro',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Grama'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste',
                baseStats: { hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45 },
                evolutionLevel: 1,
                evolution: ['Venossauro']
            },
            {
                number: '003',
                name: 'Venossauro',
                desc: 'Evolução do Ivyssauro',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Grama'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste',
                baseStats: { hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45 },
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '004',
                name: 'Charmander',
                desc: 'Primeiro Pokemon de fogo da Pokedéx',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Fogo')
                ],
                passive: 'Teste2',
                baseStats: { hp: 39, attack: 52, defense: 43, specialAtk: 60, specialDfs: 50, speed: 65 },
                evolutionLevel: 1,
                evolution: ['Charmeleon', 'Charizard']
            },
            {
                number: '007',
                name: 'Squirtle',
                desc: 'O Primeiro pokemon de água da Pokedéx',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Água')
                ],
                passive: 'Teste1',
                baseStats: { hp: 44, attack: 48, defense: 65, specialAtk: 50, specialDfs: 64, speed: 43 },
                evolutionLevel: 1,
                evolution: ['Wartortle', 'Blastoise']
            }
        ];
        return { types, pokedex };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map