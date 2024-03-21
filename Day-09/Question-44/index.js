/*

Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/
function make_sandwhich(ingredients) {
    console.log("Ingredients in sandwhich");
    for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
        var ingredient = ingredients_1[_i];
        console.log("- " + ingredient);
    }
}
make_sandwhich(["Chicken", "cheese", "onion\n"]);
make_sandwhich(["beef", "tomato\n"]);
make_sandwhich(["mayo"]);
