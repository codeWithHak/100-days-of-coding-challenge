function findVowels (userInput:string):void {
    let vowels = "aeiouAEIOU";
for (const input of userInput) {
    if (vowels.includes(input)) {
        console.log(`Vowel Found: ${input}`);
        break;
    }
    console.log(input);
}



}
findVowels("hello")
