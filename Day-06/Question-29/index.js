/*
Q29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

Make a array of your three favorite fruits and call it favorite_fruits.

Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
var favorite_fruits = ["orange", "mango", "grapes", "pomegranate", "strawberry"];
if (favorite_fruits.includes("orange")) {
    console.log("You really like orange");
}
else if (favorite_fruits.includes("mango")) {
    console.log("You really like mango");
}
else if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes");
}
else if (favorite_fruits.includes("pomegranate")) {
    console.log("You really like pomegranate");
}
else if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberry");
}
