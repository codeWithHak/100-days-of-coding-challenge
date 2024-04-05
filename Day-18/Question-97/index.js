function myDate() {
    var date = new Date();
    var day = String(date.getDay()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = String(date.getFullYear());
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(myDate());
