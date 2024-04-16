function checkNumber(num) {
    return (num % 2 === 0 && num % 3 === 0);
}
var numbertoCheck = 36;
if (checkNumber(numbertoCheck)) {
    console.log("".concat(numbertoCheck, " is divisible by 2 and 3"));
}
else {
    console.log("".concat(numbertoCheck, " is not divisible by 2 and 3"));
}
