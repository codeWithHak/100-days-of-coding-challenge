var userProfile = (function () {
    var name = "Huzair";
    var age = 18;
    return {
        displayInfo: function () {
            console.log("Name is ".concat(name, " and age is ").concat(age));
        }
    };
})();
userProfile.displayInfo();
