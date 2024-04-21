function sum(callback, x, y) {
    var result = x + y;
    callback(result);
}
function displaySum(result) {
    console.log(result);
}
sum(displaySum, 2, 2);
