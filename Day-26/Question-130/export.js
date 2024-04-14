"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function product() {
    var num1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num1[_i] = arguments[_i];
    }
    return num1.reduce(function (acc, curr) { return acc * curr; });
}
exports.default = product;
