// Q13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var bikes = ["Harley Davison", "Classic Bullet", "Kawasaki Ninja"];
for (var _i = 0, bikes_1 = bikes; _i < bikes_1.length; _i++) {
    var bike = bikes_1[_i];
    console.log("I would like to own a ".concat(bike));
}
