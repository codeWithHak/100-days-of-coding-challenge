var one = function () {
    setTimeout(function () {
        var two = function () {
            console.log("I am two");
        };
        two();
    }, 0);
    console.log("I am one");
};
var three = function () {
    console.log("I am three");
};
one();
three();
