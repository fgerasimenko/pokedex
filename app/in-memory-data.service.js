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
            { id: 5, name: 'Inseto', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 6, name: 'Voador', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 7, name: 'Normal', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 8, name: 'Elétrico', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] }
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
                evolutionLevel: 2,
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
                evolutionLevel: 3,
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
                number: '005',
                name: 'Charmeleon',
                desc: 'Evolução do Charmander',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Fogo')
                ],
                passive: 'Teste2',
                baseStats: { hp: 58, attack: 64, defense: 58, specialAtk: 80, specialDfs: 65, speed: 80 },
                evolutionLevel: 2,
                evolution: ['Charizard']
            },
            {
                number: '006',
                name: 'Charizard',
                desc: 'Evolução do Charmeleon',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Fogo')
                ],
                passive: 'Teste2',
                baseStats: { hp: 78, attack: 84, defense: 78, specialAtk: 109, specialDfs: 85, speed: 100 },
                evolutionLevel: 3,
                evolution: ['']
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
            },
            {
                number: '008',
                name: 'Wartortle',
                desc: 'Evolução do Squirtle',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Água')
                ],
                passive: 'Teste1',
                baseStats: { hp: 59, attack: 63, defense: 80, specialAtk: 65, specialDfs: 80, speed: 58 },
                evolutionLevel: 2,
                evolution: ['Blastoise']
            },
            {
                number: '009',
                name: 'Blastoise',
                desc: 'Evolução do Wartortle',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Água')
                ],
                passive: 'Teste1',
                baseStats: { hp: 79, attack: 83, defense: 100, specialAtk: 85, specialDfs: 105, speed: 78 },
                evolutionLevel: 3,
                evolution: ['']
            },
            {
                number: '010',
                name: 'Caterpie',
                desc: 'Primeiro Pokemon Inseto da Pokedéx',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Inseto')
                ],
                passive: 'Teste1',
                baseStats: { hp: 49, attack: 30, defense: 35, specialAtk: 20, specialDfs: 20, speed: 45 },
                evolutionLevel: 1,
                evolution: ['Metapod', 'Butterfree']
            },
            {
                number: '011',
                name: 'Metapod',
                desc: 'Evolução do Caterpie',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Inseto')
                ],
                passive: 'Teste1',
                baseStats: { hp: 50, attack: 20, defense: 55, specialAtk: 25, specialDfs: 25, speed: 30 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '012',
                name: 'Butterfree',
                desc: 'Evolução do Metapod',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Inseto'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 60, attack: 45, defense: 50, specialAtk: 90, specialDfs: 80, speed: 70 },
                evolutionLevel: 3,
                evolution: ['']
            },
            {
                number: '013',
                name: 'Weedle',
                desc: 'Tipo o Caterpie',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Inseto'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste1',
                baseStats: { hp: 40, attack: 35, defense: 30, specialAtk: 20, specialDfs: 20, speed: 50 },
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '014',
                name: 'Kakuna',
                desc: 'Evolução do Weedle',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Inseto'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste1',
                baseStats: { hp: 45, attack: 25, defense: 50, specialAtk: 25, specialDfs: 25, speed: 35 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '015',
                name: 'Beedrill',
                desc: 'Evolução do Kakuna',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Inseto'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 65, attack: 90, defense: 40, specialAtk: 45, specialDfs: 80, speed: 75 },
                evolutionLevel: 3,
                evolution: ['']
            },
            {
                number: '016',
                name: 'Pidgey',
                desc: 'Pombo do Pokemon',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 40, attack: 45, defense: 40, specialAtk: 35, specialDfs: 35, speed: 56 },
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '017',
                name: 'Pidgeotto',
                desc: 'Evolução do Pidgey',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 63, attack: 60, defense: 55, specialAtk: 50, specialDfs: 50, speed: 71 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '018',
                name: 'Pidgeot',
                desc: 'Evolução do Pidgeotto',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 83, attack: 80, defense: 75, specialAtk: 70, specialDfs: 70, speed: 101 },
                evolutionLevel: 3,
                evolution: ['']
            },
            {
                number: '019',
                name: 'Rattata',
                desc: 'Pior praga dos jogos do Pokemon',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal')
                ],
                passive: 'Teste1',
                baseStats: { hp: 30, attack: 56, defense: 35, specialAtk: 25, specialDfs: 35, speed: 72 },
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '020',
                name: 'Raticate',
                desc: 'Evolução do Rattata',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal')
                ],
                passive: 'Teste1',
                baseStats: { hp: 55, attack: 81, defense: 60, specialAtk: 50, specialDfs: 70, speed: 97 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '021',
                name: 'Spearow',
                desc: 'Outro Pombo',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 40, attack: 60, defense: 30, specialAtk: 31, specialDfs: 31, speed: 70 },
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '022',
                name: 'Fearow',
                desc: 'Evolução do Spearow',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Normal'),
                    types.find(tipo => tipo.name == 'Voador')
                ],
                passive: 'Teste1',
                baseStats: { hp: 65, attack: 90, defense: 65, specialAtk: 61, specialDfs: 61, speed: 100 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '023',
                name: 'Ekans',
                desc: 'Cobritcha',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste1',
                baseStats: { hp: 35, attack: 60, defense: 44, specialAtk: 40, specialDfs: 54, speed: 55 },
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '024',
                name: 'Arbok',
                desc: 'Evolução da Ekans',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste1',
                baseStats: { hp: 60, attack: 95, defense: 69, specialAtk: 65, specialDfs: 79, speed: 80 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '025',
                name: 'Pikachu',
                desc: 'Ratin elétrico',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Elétrico')
                ],
                passive: 'Teste1',
                baseStats: { hp: 35, attack: 55, defense: 40, specialAtk: 50, specialDfs: 50, speed: 90 },
                evolutionLevel: 2,
                evolution: ['']
            },
            {
                number: '026',
                name: 'Raichu',
                desc: 'Evolução do Pikachu',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Elétrico')
                ],
                passive: 'Teste1',
                baseStats: { hp: 60, attack: 90, defense: 55, specialAtk: 90, specialDfs: 80, speed: 110 },
                evolutionLevel: 3,
                evolution: ['']
            }
        ];
        return { types, pokedex };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map