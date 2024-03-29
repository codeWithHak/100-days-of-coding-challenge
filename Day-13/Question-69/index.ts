/*

Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

*/

function returnQutioent (num1:number , num2:number) {
    let remainder = num1 % num2;
    let quotient = Math.floor(num1 / num2);
    return {quotient, remainder}
}

console.log(returnQutioent(8,3));
