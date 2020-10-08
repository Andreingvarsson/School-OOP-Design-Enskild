const prompt = require('async-prompt');
const GameBoard = require('./Classes/Board/GameBoard')
const Wizard = require('./Classes/Characters/Wizard');
const Assasin = require('./Classes/Characters/Assasin')
const Barbarian = require('./Classes/Characters/Barbarian')
const Necromancer = require('./Classes/Characters/Necromancer')


let game = new GameBoard();
// game.welcomeToPlayField();
game.mainMenu()

// // // game.choosePlayerName();
// // game.pickClass();



// let necro = new Necromancer();
// console.log(necro.myClass());
// console.log(necro.myBio());

// let wiz = new Wizard();
// console.log(wiz.myBio())
// console.log(wiz.myClass())
// //console.log(wiz.myAttacks())

// let barb = new Barbarian();
// console.log(barb.myBio())
// console.log(barb.myClass())

// let ass = new Assasin();
// console.log(ass.myBio())
// console.log(ass.myClass())
// // // console.log(ass.myAttacks())