const prompt = require("async-prompt");
// const Assasin = require("../Characters/Assasin");
// const Barbarian = require("../Characters/Barbarian");
// const Wizard = require("../Characters/Wizard");
// const CharacterFrame = require("../Characters/CharacterFrame");
// const UserInteraction = require('../Interaction/UserInteraction')
const ClassBio = require("../CharInformation/ClassBio");

module.exports = class GameBoard {
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
          await this.pickClass();
          break;
        case "2":
          //   "See all characters?";
          //function()
          break;
        case "3":
          //   "see attacks?/char"audio"??";
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
          console.log("Assasin");
          // function() för assasin från factory
          await this.pickRace();
          break;
        case "2":
          console.log("Barbarian");
          // function() för barbarian från factory
          await this.pickRace();
          break;
        case "3":
          console.log("Wizard");
          // function() för wizard från factory
          await this.pickRace();
          break;
        case "4":
          console.log("Necromancer");
          // function() för Necromancer från factory
          await this.pickRace();
          break;
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
          console.log("human");
          await this.chooseCharacterName();
          break;
        case "2":
          console.log("Troll");
          await this.chooseCharacterName();
          break;
        case "3":
          console.log("dwarf");
          await this.chooseCharacterName();
          break;
        case "4":
          console.log("ogre");
          await this.chooseCharacterName();
          break;
        case "5":
          console.log("elf");
          await this.chooseCharacterName();
          break;
        case "6":
          console.log("orc");
          await this.chooseCharacterName();
          break;
        case "7":
          break;
      }
    }
  }

  async chooseCharacterName() {
    const name = await prompt("\nChoose a character name: ");
  }
};
