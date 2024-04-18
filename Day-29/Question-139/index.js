var singal = "yellow";
function checkSignal() {
    if (singal.toLowerCase() === "red") {
        return "Signal is ".concat(singal, " stop.");
    }
    else if (singal.toLowerCase() === "yellow") {
        return "Signal is ".concat(singal, " get ready!");
    }
    else if (singal.toLowerCase() === "green") {
        return "Signal is ".concat(singal, " you can go now.");
    }
}
console.log(checkSignal());
