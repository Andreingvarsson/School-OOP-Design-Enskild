const CharacterFrame = require("./CharacterFrame");

module.exports = class Assasin extends CharacterFrame {
  class;
  // attacks;

  constructor(name, race) {
    super(name, race);

    this.class = "Assasin";
    // this.attacks = attacks;
     
  }

  // attacks = [
  //   { name: "Jab", damage: 5 },
  //   { name: "Poison", damage: 10 },
  //   { name: "Impale", damage: 15 },
  // ];

  async myClass() {
    return `${this.class}`;
  }

    // attack or quote that i can use an adaptor to make life of.
  // function
};
