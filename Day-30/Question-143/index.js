var userWatching = false;
var userLeft = false;
var checkUser = new Promise(function (resolve, reject) {
    if (userLeft) {
        reject("User left");
    }
    else if (userWatching) {
        resolve("User is watching");
    }
}).then(function (message) {
    console.log("Success: ", message);
}).catch(function (message) {
    console.log("Failed: ", message);
});
