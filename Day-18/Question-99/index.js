"use strict";
/*

Question 99: Generate a date object representing your next birthday and log it to the console.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// set today
// set current year
// set birthday and it's parameters don't forget to -1 from months
// check if birthday has passed
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var showNextBirthday = getNextBirthday(3, 15);
console.log(showNextBirthday.toLocaleDateString());
