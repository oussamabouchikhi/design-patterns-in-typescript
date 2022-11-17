// Memento example Use Case

import CareTaker from './caretaker';
import GameCharacter from './game-character';

const GAME_CHARACTER = new GameCharacter();
const CARETAKER = new CareTaker(GAME_CHARACTER);

// start the game
GAME_CHARACTER.registerKill();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.addInventory('sword');
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('rifle');
GAME_CHARACTER.moveForward(1);
console.log(GAME_CHARACTER.status());

// save progress
CARETAKER.save();

GAME_CHARACTER.registerKill();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.progressToNextLevel();
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('motorbike');
GAME_CHARACTER.moveForward(10);
GAME_CHARACTER.registerKill();
console.log(GAME_CHARACTER.status());

// save progress
CARETAKER.save();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.progressToNextLevel();
GAME_CHARACTER.registerKill();
console.log(GAME_CHARACTER.status());

// decide you made a mistake, go back to first save
CARETAKER.restore(0);
console.log(GAME_CHARACTER.status());

// continue
GAME_CHARACTER.registerKill();

/* OUTPUT
~ node ./dist/behavioural/memento/client.js

Score: 200, Level: 0, Location: {"x":0,"y":0,"z":2}
Inventory: ["sword","rifle"]
CareTaker: Game Save
Score: 500, Level: 1, Location: {"x":0,"y":0,"z":13}
Inventory: ["sword","rifle","motorbike"]
CareTaker: Game Save
Score: 600, Level: 2, Location: {"x":0,"y":0,"z":14}
Inventory: ["sword","rifle","motorbike"]
CareTaker: Restoring Characters attributes from Memento
Score: 200, Level: 0, Location: {"x":0,"y":0,"z":2}
Inventory: ["sword","rifle"]

*/
