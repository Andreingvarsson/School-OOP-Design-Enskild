const CharacterFrame = require("./CharacterFrame");

module.exports = class Necromancer extends CharacterFrame {
  class;
  // attacks;

  constructor(name, race, /*attacks*/) {
    super(name, race);

    this.class = "Necromancer";
    // this.attacks = attacks; 

    // attacks = [
    //   { name: "Poison nova", damage: 10 },
    //   { name: "Corpse explosion", damage: 15 },
    //   { name: "Bone spear", damage: 20 },
    // ];
  }

  // async myBio() {
  //   return `${this.bio}`;
  // }

  async myClass() {
    return `${this.class}`;
  }
};