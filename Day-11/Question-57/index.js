/*

Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.

*/
var grades = [68, 45, 33, 65, 62, 49];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
var fixedAverageGrade = averageGrade.toFixed(2);
console.log(averageGrade.toFixed(2));
