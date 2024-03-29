/*

Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.


*/
function returnMix(num, str) {
    return num + Number(str);
}
var showMix = returnMix(10, "5");
console.log(showMix);
