const CharacterFrame = require("./CharacterFrame");

module.exports = class Wizard extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Wizard";
  }

  pyre() {
    return "boasts - My magic will incinerate my enemies!";
  }
};
