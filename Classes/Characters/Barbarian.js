const CharacterFrame = require("./CharacterFrame");

module.exports = class Barbarian extends CharacterFrame {
  class;
  // attacks;

  constructor(name, race) {
    super(name, race);

    this.class = "Barbarian";
    // this.attacks = attacks;
  }

  attacks = [
    { name: "Bash", damage: 5 },
    { name: "Frenzy", damage: 10 },
    { name: "Whirlwind", damage: 15 },
  ];

  async myClass() {
    return `${this.class}`;
  }
};