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

  isGameCreated = false;

  // Singleton design pattern, only one can be created.
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
    console.log("**|___________________________|**");
  }

  // Facade design pattern a switch covering more advanced functionality.

  async mainMenu() {
    let choice;
    while (choice !== "3") {
      choice = await prompt(
        "\n1: Create a character\n2: See all characters\n3: Exit\nEnter choice: "
      );

      switch (choice) {
        case "1":
          await this.characterCreation();
          break;
        case "2":
          this.displayAllCharacters();
          break;
        case "3":
          break;
      }
    }
  }

  async pickClass() {
    let choice;

    while (choice !== "6") {
      choice = await prompt(
        "\nChoose a class to play as\n1: Assasin\n2: Barbarian\n3: Wizard\n4: Necromancer\n5: See class bio\nEnter choice:"
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
      }
    }
  }

  async pickRace() {
    let choice;

    while (choice !== "7") {
      choice = await prompt(
        "\nChoose a race to play as\n1: Human\n2: Troll\n3: Dwarf\n4: Ogre\n5: Elf\n6: Orc\nEnter choice: "
      );

      switch (choice) {
        case "1":
          return "Human";
        case "2":
          return "Troll";
        case "3":
          return "Dwarf";
        case "4":
          return "Ogre";
        case "5":
          return "Elf";
        case "6":
          return "Orc";
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
    let newChar = CharacterFactory.createNewCharacter(newCharacter);
    // console.log(newCharacter);
    // console.log(newChar);
    this.addCharacterToDisplay(newChar);
  }

  addCharacterToDisplay(character) {
    this.characterList.push(character);
    // console.log(this.characterList);
  }

  displayAllCharacters() {
   


    if (this.characterList.length === 0) {
      console.log("\nNo characters have been created");
    } else {
      console.log(`\n~~ Created Characters ~~\n`);
      console.log(`̿ ̿̿ ̿’̿’̵͇̿̿з=(◣_◢)=ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿`);
      for (let char of this.characterList) {
        let attacks = char.attacks.map((x) => x.name)
        console.log(`\nName: ${char.name}`);
        console.log(`Race: ${char.race}`);
        console.log(`Class: ${char.class}`);
        
        console.log(`Starting attacks of the ${char.class}: ${attacks}`)
      }
    }
  }
};
