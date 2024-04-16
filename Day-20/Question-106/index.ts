function leapYear (year:number):boolean {

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let year = 2024;

if (leapYear(year)) {
    console.log(`${year} is a leap year`);
}

else{
    console.log(`${year} is not a leap year`);
    
}


export{}