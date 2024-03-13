"use strict";
// Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:
Object.defineProperty(exports, "__esModule", { value: true });
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
var guestList = ["Babar Azam", "Shadab Khan", "Saim Ayub"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", I would love to have you for dinner tonight."));
}
console.log("\n".concat(guestList[2], " won't be able to attend dinner tonight\n"));
guestList.pop();
guestList.push("Naseem Shah");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", I would love to have you for dinner tonight."));
}
