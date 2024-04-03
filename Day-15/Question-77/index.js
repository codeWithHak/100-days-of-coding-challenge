function greetUser(username) {
    if (username === void 0) { username = "Huzair"; }
    var greetings = "Hello ".concat(username, " hope you're doing okay");
    return greetings;
}
console.log(greetUser());
