"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
// - Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// - Add one new guest to the beginning of your array.
// - Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// - Print a new set of invitation messages, one for each person in your list.
var guestList = ["Babar Azam", "Shadab Khan", "Saim Ayub"];
console.log("\nHello guys a found a bigger table\n");
guestList.unshift("Chris Hemsworth");
guestList.splice(2, 0, "Chris Evans");
guestList.push("Cillian Murphy");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", I would love to have you for dinner tonight."));
}
