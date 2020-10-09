const CharacterFrame = require("./CharacterFrame");

module.exports = class Wizard extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);

    this.class = "Wizard";
  }
  // attack or quote that i can use an adaptor to make life of.
  // function

  pyre() {
    return "boasts My magic will incinerate my enemies!";
  }
};
