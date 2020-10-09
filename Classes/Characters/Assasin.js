const CharacterFrame = require("./CharacterFrame");

module.exports = class Assasin extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Assasin";
  }

  // attack or quote that i can use an adaptor to make life of.
  // function

  sneak() {
    return "whispers Shh..Im looking for prey to ambush!";
  }
};
