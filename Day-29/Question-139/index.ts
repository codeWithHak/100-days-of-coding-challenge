let singal = "yellow"

function checkSignal () {
    if (singal.toLowerCase() === "red") {
        return `Signal is ${singal} stop.`
    }
    else if (singal.toLowerCase() === "yellow") {
        return `Signal is ${singal} get ready!`
    }
    else if (singal.toLowerCase() === "green") {
        return `Signal is ${singal} you can go now.`
    }

}

console.log(checkSignal());
