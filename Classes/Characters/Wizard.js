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

  welcome(){
    console.log(`\nAs a ${this.class} you control the elements and make easy work of lesser creatures!`) 
  }
};
