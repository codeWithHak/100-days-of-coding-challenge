function replaceBanana(fruits) {
    var index = fruits.indexOf("banana");
    if (index !== -1)
        fruits[index] = "mango";
}
var myFruits = ["apple", "banana", "orange"];
replaceBanana(myFruits);
console.log(myFruits);
