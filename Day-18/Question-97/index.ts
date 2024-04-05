function myDate () {
    let date = new Date();
    let day = String(date.getDay()).padStart(2,"0");
    let month = String(date.getMonth() + 1).padStart(2,"0");
    let year = String(date.getFullYear())
    return `${day}-${month}-${year}`
}

console.log(myDate());



export{}