/*

Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.

*/

let grades = [68,45,33,65,62,49];

let averageGrade = grades.reduce((total,grade)=> total + grade, 0) / grades.length

let fixedAverageGrade = averageGrade.toFixed(2)


console.log(averageGrade.toFixed(2));








