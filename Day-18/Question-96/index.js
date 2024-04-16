function calculateSum(num) {
    return num.reduce(function (acc, currval) { return acc + currval; }, 0);
}
var num = [1, 2, 3, 4, 5];
console.log(calculateSum(num));
