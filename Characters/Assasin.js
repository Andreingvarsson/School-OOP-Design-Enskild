const CharacterFrame = require("./CharacterFrame");

module.exports = class Assasin extends CharacterFrame {
  class;
  // attacks;

  constructor(name, race, /*attacks*/) {
    super(name, race);

    this.class = "Assasin";
    // this.attacks = attacks;
     
  }

  // attacks = [
  //   { name: "Jab", damage: 5 },
  //   { name: "Poison", damage: 10 },
  //   { name: "Impale", damage: 15 },
  // ];

  // async myBio() {
  //   return `${this.bio}`;
  // }

  async myClass() {
    return `${this.class}`;
  }

  // async myAttacks(){
  //   return `${this.attacks}`
  // }
};
