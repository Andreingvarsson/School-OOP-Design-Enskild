module.exports = class characterFrame {
  name;
  race;

  constructor(name, race) {
    this.name = name;
    this.race = race;
  }

  // template design pattern
  characterIntroduction(){
    this.welcome(); 
  }

  welcome(){
    throw new Error('You cant do that..')
  }
};
