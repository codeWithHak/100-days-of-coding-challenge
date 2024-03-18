"use strict";
/*
Q31 - No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
- If the list is empty, print the message We need to find some users!

- Remove all of the usernames from your array, and make sure the correct message is printed.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var username = [];
if (username.length === 0) {
    console.log('we need to find some users');
}
else {
    for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
        var name_1 = username_1[_i];
        console.log("Hello ".concat(name_1));
    }
}
