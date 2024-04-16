/*

Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

*/
//Steps:
//get today's date
//get next year's date
//check the diff
//convert milisec to days
//return days
function newDate() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(newDate());
