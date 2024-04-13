var multipleValues = function () {
    var val = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        val[_i] = arguments[_i];
    }
    return val.reduce(function (acc, curr) { return acc * curr; });
};
console.log(multipleValues(1, 2, 4));
