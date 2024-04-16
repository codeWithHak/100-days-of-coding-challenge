/*

Question 99: Generate a date object representing your next birthday and log it to the console.

*/

// set today
// set current year
// set birthday and it's parameters don't forget to -1 from months
// check if birthday has passed


function getNextBirthday (month:number, day:number) {
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month-1, day)
    if (birthday < today) {
        birthday.setFullYear(year + 1)
    }
    return birthday
}
  
let showNextBirthday = getNextBirthday(3,15);
console.log(showNextBirthday.toLocaleDateString());


export{}










































