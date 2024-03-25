/*

Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

*/
var items = ["Apple", 2, "Custard", 5, "Bowls"];
var strings = items.filter(function (item) { return typeof item === "string"; });
console.log(strings);
