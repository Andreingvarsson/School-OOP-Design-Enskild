const CharacterFrame = require("./CharacterFrame");

module.exports = class Barbarian extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Barbarian";
  }
  // attack or quote that i can use an adaptor to make life of.
  // function

  destroy() {
    return "yells My weapons thirst for blood!";
  }
};
