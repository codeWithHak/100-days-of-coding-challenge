"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
var year = 2024;
if (leapYear(year)) {
    console.log("".concat(year, " is a leap year"));
}
else {
    console.log("".concat(year, " is not a leap year"));
}
