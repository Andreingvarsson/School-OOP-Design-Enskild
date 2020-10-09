const Necromancer = require("../Characters/Necromancer");
const Wizard = require("../Characters/Wizard");
const Barbarian = require("../Characters/Barbarian");
const Assasin = require("../Characters/Assasin");
const SpecialMoveAdapter = require("../Adaptor/SpecialMoveAdapter");

module.exports = class CharacterFactory {
  constructor() {}

  static CreateNewCharacter(character) {
    switch (character.class) {
      case "Assasin":
        let as = new Assasin(character.name, character.race);
        console.log(`\n${as.name} says: ` + SpecialMoveAdapter.saySomething(as));
        return as;
      case "Barbarian":
        let barb = new Barbarian(character.name, character.race);
        console.log(`\n${barb.name} says: ` + SpecialMoveAdapter.saySomething(barb));
        return barb;
      case "Necromancer":
        let necro = new Necromancer(character.name, character.race);
        console.log(`\n${necro.name} says: ` + SpecialMoveAdapter.saySomething(necro));
        return necro;
      case "Wizard":
        let wiz = new Wizard(character.name, character.race);
        console.log(`\n${wiz.name} says: ` + SpecialMoveAdapter.saySomething(wiz));
        return wiz;
    }
  }
};
