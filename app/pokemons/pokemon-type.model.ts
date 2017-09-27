export class Type{
    constructor(
        public id: number,
        public name: string,
        public sprite: string,
        public weakAgainst: Type[],
        public strongAgainst: Type[]
    ){}
}