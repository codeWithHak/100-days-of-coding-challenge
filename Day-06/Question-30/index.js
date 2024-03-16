/*
Q30 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var names = ["admin", "khizar", "huzaifa"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var iterator = names_1[_i];
    if (iterator == "admin") {
        console.log("Hello ".concat(iterator, " would you like to see status report?"));
    }
    else {
        console.log("Hello ".concat(iterator, " thanks for logging in"));
    }
}
