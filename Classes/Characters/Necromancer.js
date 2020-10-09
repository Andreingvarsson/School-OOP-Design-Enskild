const CharacterFrame = require("./CharacterFrame");

module.exports = class Necromancer extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Necromancer";

    // ta ut attacker o lägga i en decorator som sen ger klasserna sina attacker????!?!!??!!
  }

  // attack or quote that i can use an adaptor to make life of.
  // function

  undead() {
    return "dradfully says My undead minions will consume you!";
  }
};
