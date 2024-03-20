"use strict";
/*
Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var make_shirt = function (size, msg) {
    if (size === void 0) { size = "large"; }
    if (msg === void 0) { msg = "I Love TyprScript"; }
    if (size == "Large" || "large" || "LARGE") {
        console.log("Shirt Size is ".concat(size, " and the message printed is ").concat(msg));
    }
};
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello, World!");
