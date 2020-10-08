const prompt = require("async-prompt");
// const Assasin = require("../Characters/Assasin");
// const Barbarian = require("../Characters/Barbarian");
// const Wizard = require("../Characters/Wizard");
// const CharacterFrame = require("../Characters/CharacterFrame");
// const UserInteraction = require('../Interaction/UserInteraction')
const ClassBio = require("../CharInformation/ClassBio");

// Singleton design pattern möjligtvis??
module.exports = class Game {
  constructor() {}

  async welcomeToPlayField() {
    console.log("** ___________________________ **");
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
          //   "Try your attacks?? // see attacks?";
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
      console.log("\nChoose a class to play as\n");
      choice = await prompt(
        "\n1: Assasin\n2: Barbarian\n3: Wizard\n4: Necromancer\n5: See class bio\n6: Return\nEnter choice:"
      );

      switch (choice) {
        case "1":
          console.log("Assasin");
          // function() för assasin
          break;
        case "2":
          console.log("Barbarian");
          // function() för barbarian
          break;
        case "3":
          console.log("Wizard");
          // function() för wizard
          break;
        case "4":
          console.log("Necromancer");
          // function() för Necromancer
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

    while (choice !== "7") console.log("\nChoose a race to play as\n");
    let choice = await prompt(
      "\n1: Human\n2: Troll\n3: Dwarf\n4: Ogre\n5: Elf\n6: Orc\n7: Return\nEnter choice: "
    );

    switch (choice) {
      case "1":
        "human";
        // function()
        break;
      case "2":
        "Troll";
        // function()
        break;
      case "3":
        "dwarf";
        // function()
        break;
      case "4":
        "ogre";
        // function()
        break;
      case "5":
        "elf";
        // function()
        break;
      case "6":
        "orc";
        // function()
        break;
      case "7":
        break;
    }
  }

  async chooseCharacterName() {
    const name = await prompt("Name of player:\n ");
  }
};
