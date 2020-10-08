const CharacterFrame = require("./CharacterFrame");

module.exports = class Wizard extends CharacterFrame {
  class;
  // attacks;

  constructor(name, race) {
    super(name, race)

    this.class = "Wizard";
    // this.attacks = attacks;

    attacks = [
      { name: "Frost bolt", damage: 10 },
      { name: "Fire blast", damage: 15 },
      { name: "Pyroblast", damage: 20 },
    ];
  }
  async myClass() {
    return `${this.class}`;
  }
};