"use strict";
/*

Question 130: Explain how to export a function from one JavaScript file and import it into another file.

Explain & TIP: In modern JavaScript development, modules
allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function product() {
    var num1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num1[_i] = arguments[_i];
    }
    return num1.reduce(function (acc, curr) { return acc * curr; });
}
console.log(product(1, 2, 3));
exports.default = product;
