"use strict";
class Pokemon {
    constructor(number, name, image, desc, sprite, type, passive, baseStats, 
        //public evolutionLevel: number,
        //public evolution: Pokemon[],
        generation) {
        this.number = number;
        this.name = name;
        this.image = image;
        this.desc = desc;
        this.sprite = sprite;
        this.type = type;
        this.passive = passive;
        this.baseStats = baseStats;
        this.generation = generation;
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.model.js.map