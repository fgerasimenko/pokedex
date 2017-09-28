"use strict";
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
            { id: 8, name: 'Elétrico', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 9, name: 'Terra', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 10, name: 'Fada', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 11, name: 'Lutador', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 12, name: 'Psiquico', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 13, name: 'Fantasma', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 14, name: 'Dragão', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 15, name: 'Trevas', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 16, name: 'Aço', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 17, name: 'Pedra', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] },
            { id: 18, name: 'Gelo', sprite: '', strongAgainst: pokemon_type_model_1.Type[''], weakAgainst: pokemon_type_model_1.Type[''] }
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
                baseStats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
                generation: 1
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
                baseStats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
                generation: 1
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
                baseStats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
                generation: 1
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
                baseStats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 },
                generation: 1
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
                baseStats: { hp: 58, attack: 64, defense: 58, spAtk: 80, spDef: 65, speed: 80 },
                generation: 1
            },
            {
                number: '006',
                name: 'Charizard',
                desc: 'Evolução do Charmeleon',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Fogo'),
                    types.find(tipo => tipo.name == 'Dragão')
                ],
                passive: 'Teste2',
                baseStats: { hp: 78, attack: 84, defense: 78, spAtk: 109, spDef: 85, speed: 100 },
                generation: 1
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
                baseStats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 },
                generation: 1
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
                baseStats: { hp: 59, attack: 63, defense: 80, spAtk: 65, spDef: 80, speed: 58 },
                generation: 1
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
                baseStats: { hp: 79, attack: 83, defense: 100, spAtk: 85, spDef: 105, speed: 78 },
                generation: 1
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
                baseStats: { hp: 49, attack: 30, defense: 35, spAtk: 20, spDef: 20, speed: 45 },
                generation: 1
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
                baseStats: { hp: 50, attack: 20, defense: 55, spAtk: 25, spDef: 25, speed: 30 },
                generation: 1
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
                baseStats: { hp: 60, attack: 45, defense: 50, spAtk: 90, spDef: 80, speed: 70 },
                generation: 1
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
                baseStats: { hp: 40, attack: 35, defense: 30, spAtk: 20, spDef: 20, speed: 50 },
                generation: 1
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
                baseStats: { hp: 45, attack: 25, defense: 50, spAtk: 25, spDef: 25, speed: 35 },
                generation: 1
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
                baseStats: { hp: 65, attack: 90, defense: 40, spAtk: 45, spDef: 80, speed: 75 },
                generation: 1
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
                baseStats: { hp: 40, attack: 45, defense: 40, spAtk: 35, spDef: 35, speed: 56 },
                generation: 1
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
                baseStats: { hp: 63, attack: 60, defense: 55, spAtk: 50, spDef: 50, speed: 71 },
                generation: 1
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
                baseStats: { hp: 83, attack: 80, defense: 75, spAtk: 70, spDef: 70, speed: 101 },
                generation: 1
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
                baseStats: { hp: 30, attack: 56, defense: 35, spAtk: 25, spDef: 35, speed: 72 },
                generation: 1
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
                baseStats: { hp: 55, attack: 81, defense: 60, spAtk: 50, spDef: 70, speed: 97 },
                generation: 1
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
                baseStats: { hp: 40, attack: 60, defense: 30, spAtk: 31, spDef: 31, speed: 70 },
                generation: 1
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
                baseStats: { hp: 65, attack: 90, defense: 65, spAtk: 61, spDef: 61, speed: 100 },
                generation: 1
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
                baseStats: { hp: 35, attack: 60, defense: 44, spAtk: 40, spDef: 54, speed: 55 },
                generation: 1
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
                baseStats: { hp: 60, attack: 95, defense: 69, spAtk: 65, spDef: 79, speed: 80 },
                generation: 1
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
                baseStats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 },
                generation: 1
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
                baseStats: { hp: 60, attack: 90, defense: 55, spAtk: 90, spDef: 80, speed: 110 },
                generation: 1
            },
            {
                number: '027',
                name: 'Sandshrew',
                desc: '',
                image: '',
                sprite: ['', ''],
                type: [
                    types.find(tipo => tipo.name == 'Terra')
                ],
                passive: '',
                baseStats: { hp: 50, attack: 75, defense: 85, spAtk: 20, spDef: 30, speed: 40 },
                generation: 1
            },
            { number: "028", name: "Sandslash", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 75, attack: 100, defense: 110, spAtk: 45, spDef: 55, speed: 65 }, generation: 1 },
            { number: "029", name: "Nidoran♀", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 55, attack: 47, defense: 52, spAtk: 40, spDef: 40, speed: 41 }, generation: 1 },
            { number: "030", name: "Nidorina", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 70, attack: 62, defense: 67, spAtk: 55, spDef: 55, speed: 56 }, generation: 1 },
            { number: "031", name: "Nidoqueen", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso'), types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 90, attack: 92, defense: 87, spAtk: 75, spDef: 85, speed: 76 }, generation: 1 }, { number: "032", name: "Nidoran♂", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 46, attack: 57, defense: 40, spAtk: 40, spDef: 40, speed: 50 }, generation: 1 }, { number: "033", name: "Nidorino", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 61, attack: 72, defense: 57, spAtk: 55, spDef: 55, speed: 65 }, generation: 1 }, { number: "034", name: "Nidoking", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso'), types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 81, attack: 102, defense: 77, spAtk: 85, spDef: 75, speed: 85 }, generation: 1 }, { number: "035", name: "Clefairy", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fada')], passive: "", baseStats: { hp: 70, attack: 45, defense: 48, spAtk: 60, spDef: 65, speed: 35 }, generation: 1 }, { number: "036", name: "Clefable", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fada')], passive: "", baseStats: { hp: 95, attack: 70, defense: 73, spAtk: 95, spDef: 90, speed: 60 }, generation: 1 }, { number: "037", name: "Vulpix", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 38, attack: 41, defense: 40, spAtk: 50, spDef: 65, speed: 65 }, generation: 1 }, { number: "038", name: "Ninetales", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 73, attack: 76, defense: 75, spAtk: 81, spDef: 100, speed: 100 }, generation: 1 }, { number: "039", name: "Jigglypuff", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal'), types.find(tipo => tipo.name == 'Fada')], passive: "", baseStats: { hp: 115, attack: 45, defense: 20, spAtk: 45, spDef: 25, speed: 20 }, generation: 1 }, { number: "040", name: "Wigglytuff", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal'), types.find(tipo => tipo.name == 'Fada')], passive: "", baseStats: { hp: 140, attack: 70, defense: 45, spAtk: 85, spDef: 50, speed: 45 }, generation: 1 }, { number: "041", name: "Zubat", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 40, attack: 45, defense: 35, spAtk: 30, spDef: 40, speed: 55 }, generation: 1 }, { number: "042", name: "Golbat", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 75, attack: 80, defense: 70, spAtk: 65, spDef: 75, speed: 90 }, generation: 1 }, { number: "043", name: "Oddish", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 45, attack: 50, defense: 55, spAtk: 75, spDef: 65, speed: 30 }, generation: 1 }, { number: "044", name: "Gloom", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 60, attack: 65, defense: 70, spAtk: 85, spDef: 75, speed: 40 }, generation: 1 }, { number: "045", name: "Vileplume", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 75, attack: 80, defense: 85, spAtk: 110, spDef: 90, speed: 50 }, generation: 1 }, { number: "046", name: "Paras", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Inseto'), types.find(tipo => tipo.name == 'Grama')], passive: "", baseStats: { hp: 35, attack: 70, defense: 55, spAtk: 45, spDef: 55, speed: 25 }, generation: 1 }, { number: "047", name: "Parasect", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Inseto'), types.find(tipo => tipo.name == 'Grama')], passive: "", baseStats: { hp: 60, attack: 95, defense: 80, spAtk: 60, spDef: 80, speed: 30 }, generation: 1 }, { number: "048", name: "Venonat", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Inseto'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 60, attack: 55, defense: 50, spAtk: 40, spDef: 55, speed: 45 }, generation: 1 }, { number: "049", name: "Venomoth", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Inseto'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 70, attack: 65, defense: 60, spAtk: 90, spDef: 75, speed: 90 }, generation: 1 }, { number: "050", name: "Diglett", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 10, attack: 55, defense: 25, spAtk: 35, spDef: 45, speed: 95 }, generation: 1 }, { number: "051", name: "Dugtrio", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 35, attack: 100, defense: 50, spAtk: 50, spDef: 70, speed: 120 }, generation: 1 }, { number: "052", name: "Meowth", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 40, attack: 45, defense: 35, spAtk: 40, spDef: 40, speed: 90 }, generation: 1 }, { number: "053", name: "Persian", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 65, attack: 70, defense: 60, spAtk: 65, spDef: 65, speed: 115 }, generation: 1 }, { number: "054", name: "Psyduck", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 50, attack: 52, defense: 48, spAtk: 65, spDef: 50, speed: 55 }, generation: 1 }, { number: "055", name: "Golduck", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 80, attack: 82, defense: 78, spAtk: 95, spDef: 80, speed: 85 }, generation: 1 }, { number: "056", name: "Mankey", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 40, attack: 80, defense: 35, spAtk: 35, spDef: 45, speed: 70 }, generation: 1 }, { number: "057", name: "Primeape", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 65, attack: 105, defense: 60, spAtk: 60, spDef: 70, speed: 95 }, generation: 1 }, { number: "058", name: "Growlithe", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 55, attack: 70, defense: 45, spAtk: 70, spDef: 50, speed: 60 }, generation: 1 }, { number: "059", name: "Arcanine", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 90, attack: 110, defense: 80, spAtk: 100, spDef: 80, speed: 95 }, generation: 1 }, { number: "060", name: "Poliwag", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 40, attack: 50, defense: 40, spAtk: 40, spDef: 40, speed: 90 }, generation: 1 }, { number: "061", name: "Poliwhirl", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 65, attack: 65, defense: 65, spAtk: 50, spDef: 50, speed: 90 }, generation: 1 }, { number: "062", name: "Poliwrath", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 90, attack: 95, defense: 95, spAtk: 70, spDef: 90, speed: 70 }, generation: 1 }, { number: "063", name: "Abra", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 25, attack: 20, defense: 15, spAtk: 105, spDef: 55, speed: 90 }, generation: 1 }, { number: "064", name: "Kadabra", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 40, attack: 35, defense: 30, spAtk: 120, spDef: 70, speed: 105 }, generation: 1 }, { number: "065", name: "Alakazam", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 55, attack: 50, defense: 45, spAtk: 135, spDef: 95, speed: 120 }, generation: 1 }, { number: "066", name: "Machop", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 70, attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 }, generation: 1 },
            { number: "067", name: "Machoke", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 80, attack: 100, defense: 70, spAtk: 50, spDef: 60, speed: 45 }, generation: 1 },
            { number: "068", name: "Machamp", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 90, attack: 130, defense: 80, spAtk: 65, spDef: 85, speed: 55 }, generation: 1 },
            { number: "069", name: "Bellsprout", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 50, attack: 75, defense: 35, spAtk: 70, spDef: 30, speed: 40 }, generation: 1 }, { number: "070", name: "Weepinbell", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 65, attack: 90, defense: 50, spAtk: 85, spDef: 45, speed: 55 }, generation: 1 }, { number: "071", name: "Victreebel", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 80, attack: 105, defense: 65, spAtk: 100, spDef: 70, speed: 70 }, generation: 1 }, { number: "072", name: "Tentacool", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 40, attack: 40, defense: 35, spAtk: 50, spDef: 100, speed: 70 }, generation: 1 }, { number: "073", name: "Tentacruel", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 80, attack: 70, defense: 65, spAtk: 80, spDef: 120, speed: 100 }, generation: 1 }, { number: "074", name: "Geodude", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 40, attack: 80, defense: 100, spAtk: 30, spDef: 30, speed: 20 }, generation: 1 }, { number: "075", name: "Graveler", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 55, attack: 95, defense: 115, spAtk: 45, spDef: 45, speed: 35 }, generation: 1 }, { number: "076", name: "Golem", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 80, attack: 120, defense: 130, spAtk: 55, spDef: 65, speed: 45 }, generation: 1 }, { number: "077", name: "Ponyta", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 50, attack: 85, defense: 55, spAtk: 65, spDef: 65, speed: 90 }, generation: 1 }, { number: "078", name: "Rapidash", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 65, attack: 100, defense: 70, spAtk: 80, spDef: 80, speed: 105 }, generation: 1 }, { number: "079", name: "Slowpoke", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 90, attack: 65, defense: 65, spAtk: 40, spDef: 40, speed: 15 }, generation: 1 }, { number: "080", name: "Slowbro", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 95, attack: 75, defense: 110, spAtk: 100, spDef: 80, speed: 30 }, generation: 1 }, { number: "081", name: "Magnemite", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico'), types.find(tipo => tipo.name == 'Aço')], passive: "", baseStats: { hp: 25, attack: 35, defense: 70, spAtk: 95, spDef: 55, speed: 45 }, generation: 1 }, { number: "082", name: "Magneton", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico'), types.find(tipo => tipo.name == 'Aço')], passive: "", baseStats: { hp: 50, attack: 60, defense: 95, spAtk: 120, spDef: 70, speed: 70 }, generation: 1 }, { number: "083", name: "Farfetch'd", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 52, attack: 90, defense: 55, spAtk: 58, spDef: 62, speed: 60 }, generation: 1 }, { number: "084", name: "Doduo", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 35, attack: 85, defense: 45, spAtk: 35, spDef: 35, speed: 75 }, generation: 1 }, { number: "085", name: "Dodrio", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 60, attack: 110, defense: 70, spAtk: 60, spDef: 60, speed: 110 }, generation: 1 }, { number: "086", name: "Seel", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 65, attack: 45, defense: 55, spAtk: 45, spDef: 70, speed: 45 }, generation: 1 }, { number: "087", name: "Dewgong", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Gelo')], passive: "", baseStats: { hp: 90, attack: 70, defense: 80, spAtk: 70, spDef: 95, speed: 70 }, generation: 1 }, { number: "088", name: "Grimer", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 80, attack: 80, defense: 50, spAtk: 40, spDef: 50, speed: 25 }, generation: 1 }, { number: "089", name: "Muk", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 105, attack: 105, defense: 75, spAtk: 65, spDef: 100, speed: 50 }, generation: 1 }, { number: "090", name: "Shellder", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 30, attack: 65, defense: 100, spAtk: 45, spDef: 25, speed: 40 }, generation: 1 }, { number: "091", name: "Cloyster", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Gelo')], passive: "", baseStats: { hp: 50, attack: 95, defense: 180, spAtk: 85, spDef: 45, speed: 70 }, generation: 1 }, { number: "092", name: "Gastly", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fantasma'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 30, attack: 35, defense: 30, spAtk: 100, spDef: 35, speed: 80 }, generation: 1 }, { number: "093", name: "Haunter", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fantasma'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 45, attack: 50, defense: 45, spAtk: 115, spDef: 55, speed: 95 }, generation: 1 }, { number: "094", name: "Gengar", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fantasma'), types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 60, attack: 65, defense: 60, spAtk: 130, spDef: 75, speed: 110 }, generation: 1 }, { number: "095", name: "Onix", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 35, attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70 }, generation: 1 }, { number: "096", name: "Drowzee", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 60, attack: 48, defense: 45, spAtk: 43, spDef: 90, speed: 42 }, generation: 1 }, { number: "097", name: "Hypno", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 85, attack: 73, defense: 70, spAtk: 73, spDef: 115, speed: 67 }, generation: 1 }, { number: "098", name: "Krabby", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 30, attack: 105, defense: 90, spAtk: 25, spDef: 25, speed: 50 }, generation: 1 }, { number: "099", name: "Kingler", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 55, attack: 130, defense: 115, spAtk: 50, spDef: 50, speed: 75 }, generation: 1 }, { number: "100", name: "Voltorb", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico')], passive: "", baseStats: { hp: 40, attack: 30, defense: 50, spAtk: 55, spDef: 55, speed: 100 }, generation: 1 }, { number: "101", name: "Electrode", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico')], passive: "", baseStats: { hp: 60, attack: 50, defense: 70, spAtk: 80, spDef: 80, speed: 150 }, generation: 1 },
            { number: "102", name: "Exeggcute", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 60, attack: 40, defense: 80, spAtk: 60, spDef: 45, speed: 40 }, generation: 1 }, { number: "103", name: "Exeggutor", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama'), types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 95, attack: 95, defense: 85, spAtk: 125, spDef: 75, speed: 55 }, generation: 1 },
            { number: "104", name: "Cubone", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 50, attack: 50, defense: 95, spAtk: 40, spDef: 50, speed: 35 }, generation: 1 }, { number: "105", name: "Marowak", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra')], passive: "", baseStats: { hp: 60, attack: 80, defense: 110, spAtk: 50, spDef: 80, speed: 45 }, generation: 1 }, { number: "106", name: "Hitmonlee", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 50, attack: 120, defense: 53, spAtk: 35, spDef: 110, speed: 87 }, generation: 1 }, { number: "107", name: "Hitmonchan", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Lutador')], passive: "", baseStats: { hp: 50, attack: 105, defense: 79, spAtk: 35, spDef: 110, speed: 76 }, generation: 1 }, { number: "108", name: "Lickitung", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 90, attack: 55, defense: 75, spAtk: 60, spDef: 75, speed: 30 }, generation: 1 }, { number: "109", name: "Koffing", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 40, attack: 65, defense: 95, spAtk: 60, spDef: 45, speed: 35 }, generation: 1 }, { number: "110", name: "Weezing", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Venenoso')], passive: "", baseStats: { hp: 65, attack: 90, defense: 120, spAtk: 85, spDef: 70, speed: 60 }, generation: 1 }, { number: "111", name: "Rhyhorn", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra'), types.find(tipo => tipo.name == 'Pedra')], passive: "", baseStats: { hp: 80, attack: 85, defense: 95, spAtk: 30, spDef: 30, speed: 25 }, generation: 1 }, { number: "112", name: "Rhydon", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Terra'), types.find(tipo => tipo.name == 'Pedra')], passive: "", baseStats: { hp: 105, attack: 130, defense: 120, spAtk: 45, spDef: 45, speed: 40 }, generation: 1 }, { number: "113", name: "Chansey", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 250, attack: 5, defense: 5, spAtk: 35, spDef: 105, speed: 50 }, generation: 1 }, { number: "114", name: "Tangela", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Grama')], passive: "", baseStats: { hp: 65, attack: 55, defense: 115, spAtk: 100, spDef: 40, speed: 60 }, generation: 1 }, { number: "115", name: "Kangaskhan", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 105, attack: 95, defense: 80, spAtk: 40, spDef: 80, speed: 90 }, generation: 1 }, { number: "116", name: "Horsea", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 30, attack: 40, defense: 70, spAtk: 70, spDef: 25, speed: 60 }, generation: 1 }, { number: "117", name: "Seadra", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 55, attack: 65, defense: 95, spAtk: 95, spDef: 45, speed: 85 }, generation: 1 }, { number: "118", name: "Goldeen", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 45, attack: 67, defense: 60, spAtk: 35, spDef: 50, speed: 63 }, generation: 1 }, { number: "119", name: "Seaking", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 80, attack: 92, defense: 65, spAtk: 65, spDef: 80, speed: 68 }, generation: 1 }, { number: "120", name: "Staryu", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 30, attack: 45, defense: 55, spAtk: 70, spDef: 55, speed: 85 }, generation: 1 }, { number: "121", name: "Starmie", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 60, attack: 75, defense: 85, spAtk: 100, spDef: 85, speed: 115 }, generation: 1 }, { number: "122", name: "Mr. Mime", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico'), types.find(tipo => tipo.name == 'Fada')], passive: "", baseStats: { hp: 40, attack: 45, defense: 65, spAtk: 100, spDef: 120, speed: 90 }, generation: 1 }, { number: "123", name: "Scyther", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Inseto'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 70, attack: 110, defense: 80, spAtk: 55, spDef: 80, speed: 105 }, generation: 1 }, { number: "124", name: "Jynx", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Gelo'), types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 65, attack: 50, defense: 35, spAtk: 115, spDef: 95, speed: 95 }, generation: 1 }, { number: "125", name: "Electabuzz", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico')], passive: "", baseStats: { hp: 65, attack: 83, defense: 57, spAtk: 95, spDef: 85, speed: 105 }, generation: 1 }, { number: "126", name: "Magmar", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 65, attack: 95, defense: 57, spAtk: 100, spDef: 85, speed: 93 }, generation: 1 }, { number: "127", name: "Pinsir", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Inseto')], passive: "", baseStats: { hp: 65, attack: 125, defense: 100, spAtk: 55, spDef: 70, speed: 85 }, generation: 1 }, { number: "128", name: "Tauros", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 75, attack: 100, defense: 95, spAtk: 40, spDef: 70, speed: 110 }, generation: 1 }, { number: "129", name: "Magikarp", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 20, attack: 10, defense: 55, spAtk: 15, spDef: 20, speed: 80 }, generation: 1 }, { number: "130", name: "Gyarados", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 95, attack: 125, defense: 79, spAtk: 60, spDef: 100, speed: 81 }, generation: 1 }, { number: "131", name: "Lapras", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água'), types.find(tipo => tipo.name == 'Gelo')], passive: "", baseStats: { hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60 }, generation: 1 }, { number: "132", name: "Ditto", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 48, attack: 48, defense: 48, spAtk: 48, spDef: 48, speed: 48 }, generation: 1 }, { number: "133", name: "Eevee", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 }, generation: 1 }, { number: "134", name: "Vaporeon", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 130, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 65 }, generation: 1 }, { number: "135", name: "Jolteon", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico')], passive: "", baseStats: { hp: 65, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 130 }, generation: 1 }, { number: "136", name: "Flareon", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo')], passive: "", baseStats: { hp: 65, attack: 130, defense: 60, spAtk: 95, spDef: 110, speed: 65 }, generation: 1 }, { number: "137", name: "Porygon", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 65, attack: 60, defense: 70, spAtk: 85, spDef: 75, speed: 40 }, generation: 1 }, { number: "138", name: "Omanyte", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 35, attack: 40, defense: 100, spAtk: 90, spDef: 55, speed: 35 }, generation: 1 }, { number: "139", name: "Omastar", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 70, attack: 60, defense: 125, spAtk: 115, spDef: 70, speed: 55 }, generation: 1 }, { number: "140", name: "Kabuto", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 30, attack: 80, defense: 90, spAtk: 55, spDef: 45, speed: 55 }, generation: 1 }, { number: "141", name: "Kabutops", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Água')], passive: "", baseStats: { hp: 60, attack: 115, defense: 105, spAtk: 65, spDef: 70, speed: 80 }, generation: 1 },
            { number: "142", name: "Aerodactyl", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Pedra'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 80, attack: 105, defense: 65, spAtk: 60, spDef: 75, speed: 130 }, generation: 1 }, { number: "143", name: "Snorlax", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Normal')], passive: "", baseStats: { hp: 160, attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30 }, generation: 1 }, { number: "144", name: "Articuno", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Gelo'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85 }, generation: 1 }, { number: "145", name: "Zapdos", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Elétrico'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100 }, generation: 1 }, { number: "146", name: "Moltres", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Fogo'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90 }, generation: 1 }, { number: "147", name: "Dratini", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Dragão')], passive: "", baseStats: { hp: 41, attack: 64, defense: 45, spAtk: 50, spDef: 50, speed: 50 }, generation: 1 }, { number: "148", name: "Dragonair", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Dragão')], passive: "", baseStats: { hp: 61, attack: 84, defense: 65, spAtk: 70, spDef: 70, speed: 70 }, generation: 1 }, { number: "149", name: "Dragonite", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Dragão'), types.find(tipo => tipo.name == 'Voador')], passive: "", baseStats: { hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80 }, generation: 1 }, { number: "150", name: "Mewtwo", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 106, attack: 110, defense: 90, spAtk: 154, spDef: 90, speed: 130 }, generation: 1 }, { number: "151", name: "Mew", desc: "", image: "", sprite: ["", ""], type: [types.find(tipo => tipo.name == 'Psiquico')], passive: "", baseStats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }, generation: 1 }
        ];
        return { types, pokedex };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map