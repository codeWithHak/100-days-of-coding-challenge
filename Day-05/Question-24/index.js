/*
Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

Tests for equality and inequality with strings

Tests using the lower case function

Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

Tests using "and" and "or" operators

Test whether an item is in a array

Test whether an item is not in a array
*/
var result = "Passed";
console.log("Is result == Passed? I predict true");
console.log(result == "Passed");
console.log("Is result != Passed I predict false");
console.log(result != "Passed");
var username = "User";
console.log("Is username == username.toLowerCase()? I preditc false");
console.log(username == username.toLowerCase());
var myNum = 10;
console.log("Is myNum == 10? I predict true");
console.log(myNum == 10);
console.log("Is myNum != 10? I predict false");
console.log(myNum != 10);
console.log("Is myNum > 10? I predict false");
console.log(myNum > 10);
console.log("Is myNum < 10? I predict false");
console.log(myNum < 10);
console.log("Is myNum >= 10? I predict true");
console.log(myNum >= 10);
console.log("Is myNum <= 10? I predict true");
console.log(myNum <= 10);
console.log("Is myNum is > 9 && < 11? I predict true");
console.log(myNum > 9 && myNum < 11);
console.log("Is myNum is > 9 || < 11? I predict true");
console.log(myNum > 9 || myNum < 11);
console.log("Is myNum is > 10 && < 11? I predict false");
console.log(myNum > 10 && myNum < 11);
console.log("Is myNum is > 11 && < 9? I predict false");
console.log(myNum > 11 && myNum < 9);
console.log("Is myNum is > 10 || < 11? I predict true");
console.log(myNum > 10 || myNum < 11);
// let items = ["watch","shoes","glasses"]
// console.log("Is 'shoes' available in items? I predict true.");
// console.log(items.includes("shoes"));
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
