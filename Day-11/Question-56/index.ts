/*

Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

*/

let items = ["Apple",2,"Custard",5,"Bowls"]

let strings = items.filter((item)=> typeof item === "string")


console.log(strings);



