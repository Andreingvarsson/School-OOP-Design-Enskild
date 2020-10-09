const prompt = require("async-prompt");
// const Assasin = require("../Characters/Assasin");
// const Barbarian = require("../Characters/Barbarian");
// const Wizard = require("../Characters/Wizard");
// const CharacterFrame = require("../Characters/CharacterFrame");
// const UserInteraction = require('../Interaction/UserInteraction')
const ClassBio = require("../CharInformation/ClassBio");
const CharacterFactory = require("../Factory/CharacterFactory");

module.exports = class GameBoard {
  characterList = [];
  // Singleton design pattern möjligtvis??
  isGameCreated = false;

  constructor() {
    if (GameBoard.isGameCreated) {
      throw new Error("Only one GameBoard can exist at a time!");
    }
    GameBoard.isGameCreated = true;
  }

  async welcomeToPlayField() {
    console.log("   ___________________________ ");
    console.log("**|                           |**");
    console.log("̿*|  ̿̿ ̿’̿’̵͇̿̿з=(◣_◢)=ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿     |**");
    console.log("**|                           |**");
    console.log("**| Welcome to this game!     |**");
    console.log("**| Create your own character |**");
    console.log("**| and do something          |**");
    console.log("**|___________________________|**");
  }

  // Facade design pattern en switch som döljer funktionalitet.

  async mainMenu() {
    let choice;
    while (choice !== "4") {
      choice = await prompt(
        "\n1: Create a character\n2: See all characters\n3: Try attacks?/see attacks??\n4: Exit\nEnter choice: "
      );

      switch (choice) {
        case "1":
          await this.characterCreation();
          break;
        case "2":
          //   "See all characters?";
          this.displayAllCharacters();
          break;
        case "3":
          //   "see attacks?/char"audio"??"; ett till val som är välja attacker??
          //function()
          break;
        case "4":
          //   "Exit";
          break;
      }
    }
  }

  async pickClass() {
    let choice;
    while (choice !== "6") {
      choice = await prompt(
        "\nChoose a class to play as\n1: Assasin\n2: Barbarian\n3: Wizard\n4: Necromancer\n5: See class bio\n6: Return\nEnter choice:"
      );

      switch (choice) {
        case "1":
          return "Assasin";
        case "2":
          return "Barbarian";
        case "3":
          return "Wizard";
        case "4":
          return "Necromancer";
        case "5":
          ClassBio.getAllBios();
          break;
        case "6":
          break;
      }
    }
  }

  async pickRace() {
    let choice;

    while (choice !== "7") {
      choice = await prompt(
        "\nChoose a race to play as\n1: Human\n2: Troll\n3: Dwarf\n4: Ogre\n5: Elf\n6: Orc\n7: Return\nEnter choice: "
      );

      switch (choice) {
        case "1":
          return "human";
        case "2":
          return "Troll";
        case "3":
          return "dwarf";
        case "4":
          return "ogre";
        case "5":
          return "elf";
        case "6":
          return "orc";
        case "7":
          break;
      }
    }
  }

  async pickName() {
    const name = await prompt("\nChoose a character name: ");
    return name;
  }

  async characterCreation() {
    let newCharacter = {
      class: "",
      race: "",
      name: "",
    };

    newCharacter.class = await this.pickClass();
    newCharacter.race = await this.pickRace();
    newCharacter.name = await this.pickName();
    let newChar = CharacterFactory.CreateNewCharacter(newCharacter);
    console.log(newCharacter);
    console.log(newChar);
    this.addCharacterToDisplay(newChar);
  }

  addCharacterToDisplay(character) {
    this.characterList.push(character);
    console.log(this.characterList);
  }

  displayAllCharacters() {
    console.log(`\n~~ Created Characters ~~\n`);
    console.log(`̿ ̿̿ ̿’̿’̵͇̿̿з=(◣_◢)=ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿`);
    for (let char of this.characterList) {
      console.log(`\nName: ${char.name}`);
      console.log(`Race: ${char.race}`);
      console.log(`Class: ${char.class}`);
    }
  }
};
