"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function averageGrade() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var average = num.reduce(function (a, b) { return a + b; }, 0) / num.length;
    return average;
}
console.log(averageGrade(20, 40, 60, 80, 100));
