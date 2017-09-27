import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Pokemon } from './pokemons/pokemon.model';
import { Type } from './pokemons/pokemon-type.model';
import { Stats } from './interfaces/stats-interface';

export class InMemoryDataService implements InMemoryDbService{
    createDb(): {}
    {
        let types: Type[] = [
            {name:'grama', sprite:'', strongAgainst:Type['grama'], weakAgainst:Type['grama'],}
        ]
        let pokedex: Pokemon[] = [
            {
                number: '001',
                name: 'Bulbassauro',
                image: '',
                sprite: ['',''],
                type: Type['grama'],
                passive: 'Teste',
                baseStats: {hp: 45, attack: 49, defense: 49, specialAtk: 65, specialDfs: 65, speed: 45},
                evolutionLevel: 1,
                evolution: Pokemon['001']

            },
            
        ];
        return {types,pokedex};
    }
}