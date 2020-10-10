const GameBoard = require("./Classes/Board/GameBoard");

let game = new GameBoard();
game.welcomeToPlayField();
game.mainMenu();

/* 
Creational - Singleton - (GameBoard), factory - (CharacterFactory);
Structural - Facade - (GameBoard), Adapter - (ClassMessageAdapter), decorator - (AttackDecorator);
Behaviour - Template - (CharacterFrame -> subclasses)
5 design patterns in total, together with atleast 10 classes.
*/
