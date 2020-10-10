const CharacterFrame = require("./CharacterFrame");

module.exports = class Barbarian extends CharacterFrame {
  class;

  constructor(name, race) {
    super(name, race);
    this.class = "Barbarian";
  }

  destroy() {
    return "yells - My weapons thirst for blood!";
  }

  welcome(){
    console.log(`\nAs a ${this.class} you fight and bludgeon anyone who oppose you!`) 
  }
};
