function checkMorning () {
    let currentDate = new Date
    let currentTime = currentDate.getHours()
    return currentTime

}

 let showCheckMorning = checkMorning()
    

if (showCheckMorning < 12) {
    console.log(`Good Morning, it's ${showCheckMorning} am`);
}
