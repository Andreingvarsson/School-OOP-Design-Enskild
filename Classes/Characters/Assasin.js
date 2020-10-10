const CharacterFrame = require("./CharacterFrame");

module.exports = class Assasin extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Assasin";
  }

  sneak() {
    return "whispers - Shh..Im looking for prey to ambush!";
  }
};
