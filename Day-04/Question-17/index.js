/* **Q17** - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
- Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

- Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

- Print a message to each of the two people still on your list, letting them know they’re still invited.

- Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
//Q16
var guestList = ["Babar Azam", "Shadab Khan", "Saim Ayub"];
console.log("\nHello guys a found a bigger table\n");
guestList.unshift("Chris Hemsworth");
guestList.splice(2, 0, "Chris Evans");
guestList.push("Cillian Murphy");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", I would love to have you for dinner tonight."));
}
//Q17
console.log("\nSoryy guys only two of you can come\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, " we will meet again sometime "));
}
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Mr ".concat(guest, " you are still invited"));
}
while (guestList.length < 1) {
    var emptyList = guestList.pop();
    console.log(emptyList);
}
