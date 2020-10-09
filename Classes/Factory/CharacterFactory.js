const Necromancer = require("../Characters/Necromancer");
const Wizard = require("../Characters/Wizard");
const Barbarian = require('../Characters/Barbarian');
const Assasin = require('../Characters/Assasin');

module.exports = class CharacterFactory {

    constructor(){
    }


    static CreateNewCharacter(character){
        
        switch(character.class){
            case 'Assasin': let as = new Assasin(character.name, character.race)
            return as;
            case 'Barbarian': let barb = new Barbarian(character.name, character.race)
            return barb;
            case 'Necromancer': let necro = new Necromancer(character.name, character.race)
            return necro;
            case 'Wizard': let wiz = new Wizard(character.name, character.race)
            return wiz;
        }
    }
    
}