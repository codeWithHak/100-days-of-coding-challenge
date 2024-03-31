/*

Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.

*/
var a = 5, b = 10;
console.log("a =", a, " b =", b);
var c = a;
a = b;
b = c;
console.log("a =", a, " b =", b);
