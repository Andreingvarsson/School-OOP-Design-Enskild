const CharacterFrame = require("./CharacterFrame");

module.exports = class Necromancer extends CharacterFrame {
  class;
  // attacks;

  constructor(name, race) {
    super(name, race);

    this.class = "Necromancer";
    // this.attacks = attacks; 


    // ta ut attacker o lägga i en decorator som sen ger klasserna sina attacker????!?!!??!!
    attacks = [
      { name: "Poison nova", damage: 10 },
      { name: "Corpse explosion", damage: 15 },
      { name: "Bone spear", damage: 20 },
    ];
  }

  async myClass() {
    return `${this.class}`;
  }
};