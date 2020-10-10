const Necromancer = require("../Characters/Necromancer");
const Wizard = require("../Characters/Wizard");
const Barbarian = require("../Characters/Barbarian");
const Assasin = require("../Characters/Assasin");
const ClassMessageAdapter = require("../Adaptor/ClassMessageAdapter");
const AttackDecoractor = require("../decorator/AttackDecorator");


module.exports = class CharacterFactory {
  constructor() {}

  static createNewCharacter(character) {
    switch (character.class) {
      case "Assasin":
        let as = new Assasin(character.name, character.race);
        console.log(`\n${as.name} ` + ClassMessageAdapter.saySomething(as));
        as.characterIntroduction();
        AttackDecoractor.teachAttacks(as);
        return as;
      case "Barbarian":
        let barb = new Barbarian(character.name, character.race);
        console.log(`\n${barb.name} ` + ClassMessageAdapter.saySomething(barb));
        barb.characterIntroduction();
        AttackDecoractor.teachAttacks(barb);
        return barb;
      case "Necromancer":
        let necro = new Necromancer(character.name, character.race);
        console.log(`\n${necro.name} ` + ClassMessageAdapter.saySomething(necro));
        necro.characterIntroduction();
        AttackDecoractor.teachAttacks(necro);
        return necro;
      case "Wizard":
        let wiz = new Wizard(character.name, character.race);
        console.log(`\n${wiz.name} ` + ClassMessageAdapter.saySomething(wiz));
        wiz.characterIntroduction();
        AttackDecoractor.teachAttacks(wiz);
        return wiz;
    }
  }
};
