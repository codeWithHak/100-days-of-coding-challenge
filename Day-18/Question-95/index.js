function returnGreaterThanTen(num) {
    var returning = numbers.filter(function (num) { return num > 10; });
    return returning;
}
var numbers = [1, 5, 10, 15, 20, 25, 30];
console.log(returnGreaterThanTen(numbers));
