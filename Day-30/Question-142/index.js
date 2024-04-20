var printMePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
}).then(function (message) {
    console.log(message);
});
