function findVowels(userInput) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, userInput_1 = userInput; _i < userInput_1.length; _i++) {
        var input = userInput_1[_i];
        if (vowels.includes(input)) {
            console.log("Vowel Found: ".concat(input));
            break;
        }
        console.log(input);
    }
}
findVowels("hello");
