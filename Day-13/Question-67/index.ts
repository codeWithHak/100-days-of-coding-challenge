/*

Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.


*/

function returnMix (num:number,str:string):number {
    return num + Number(str)
}

let showMix = returnMix(10,"5");
console.log(showMix);
