/*

Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

*/
function hobbies() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var hobby = rest_1[_a];
        console.log("I enjoy ".concat(hobby, " a lot"));
    }
}
hobbies("Cricket", "Gaming", "Coding");
