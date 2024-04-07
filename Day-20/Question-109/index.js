function checkMorning() {
    var currentDate = new Date;
    var currentTime = currentDate.getHours();
    return currentTime;
}
var showCheckMorning = checkMorning();
if (showCheckMorning < 12) {
    console.log("Good Morning, it's ".concat(showCheckMorning, " am"));
}
