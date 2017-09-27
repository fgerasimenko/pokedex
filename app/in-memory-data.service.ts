import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Pokemon } from './pokemons/pokemon.model';
import { Type } from './pokemons/pokemon-type.model';
import { Stats } from './interfaces/stats-interface';

export class InMemoryDataService implements InMemoryDbService{
    createDb(): {}
    {
        let types: Type[] = [
            {id:1,name:'Grama', sprite:'', strongAgainst:Type['água'], weakAgainst:Type['fogo']},
            {id:2,name:'Fogo', sprite:'', strongAgainst:Type['grama'], weakAgainst:Type['água']},
            {id:3,name:'Água', sprite:'', strongAgainst:Type['fogo'], weakAgainst:Type['água']},
            {id:4,name:'Venenoso', sprite:'', strongAgainst:Type[''], weakAgainst:Type['']},
        ]
        let pokedex: Pokemon[] = [
            {
                number: '001',
                name: 'Bulbassauro',
                desc: 'O Primeiro pokemon da Pokedéx',
                image: '',//'app/pokemons/img/bulbassauro.jpg',
                sprite: ['',''],
                type: [
                    types.find(tipo => tipo.name == 'Grama'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste',
                baseStats: {hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45},
                evolutionLevel: 1,
                evolution: Pokemon['001']

            },
            {
                number: '002',
                name: 'Ivyssauro',
                desc: 'Evolução do Bulbassauro',
                image: '',
                sprite: ['',''],
                type: [
                    types.find(tipo => tipo.name == 'Grama'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste',
                baseStats: {hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45},
                evolutionLevel: 1,
                evolution: ['Venossauro']
            },
            {
                number: '003',
                name: 'Venossauro',
                desc: 'Evolução do Ivyssauro',
                image: '',
                sprite: ['',''],
                type: [
                    types.find(tipo => tipo.name == 'Grama'),
                    types.find(tipo => tipo.name == 'Venenoso')
                ],
                passive: 'Teste',
                baseStats: {hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45},
                evolutionLevel: 1,
                evolution: ['']
            },
            {
                number: '004',
                name: 'Charmander',
                desc: 'Primeiro Pokemon de fogo da Pokedéx',
                image: '',//'app/pokemons/img/charmander.jpg',
                sprite: ['',''],
                type: [
                    types.find(tipo => tipo.name == 'Fogo')
                ],
                passive: 'Teste2',
                baseStats: {hp: 39, attack: 52, defense: 43, specialAtk: 60, specialDfs: 50, speed: 65},
                evolutionLevel: 1,
                evolution: ['Charmeleon','Charizard']
            },
            {
                number: '007',
                name: 'Squirtle',
                desc: 'O Primeiro pokemon de água da Pokedéx',
                image: '',//'app/pokemons/img/squirtle.jpg',
                sprite: ['',''],
                type: [
                    types.find(tipo => tipo.name == 'Água')
                ],
                passive: 'Teste1',
                baseStats: {hp: 44, attack: 48, defense: 65, specialAtk: 50, specialDfs: 64, speed: 43},
                evolutionLevel: 1,
                evolution: ['Wartortle','Blastoise']

            }
            
        ];
        return {types,pokedex};
    }
}