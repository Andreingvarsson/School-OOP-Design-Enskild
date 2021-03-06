const CharacterFrame = require("./CharacterFrame");

module.exports = class Necromancer extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Necromancer";
  }

  undead() {
    return "dradfully says - My undead minions will consume you!";
  }

  welcome(){
    console.log(`\nAs a ${this.class} you summon the undead, curse and expload your enemies..`) 
  }
};
