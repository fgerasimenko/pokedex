import { Type } from './pokemon-type.model'
import { Stats } from './../interfaces/stats-interface';

export class Pokemon{
    constructor(
        public number: string,
        public name: string,
        public image: string,
        public desc: string,
        public sprite: string[],
        public type: Type[],
        public passive: string,
        public baseStats: Stats,
        //public evolutionLevel: number,
        //public evolution: Pokemon[],
        public generation: number
    ){}

}