export class Type{
    constructor(
        public name: string,
        public sprite: string,
        public weakAgainst: Type[],
        public strongAgainst: Type[]
    ){}
}