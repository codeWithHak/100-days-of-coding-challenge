"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diceGame() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}
console.log(diceGame());
