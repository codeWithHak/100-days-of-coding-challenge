function checkNumber (num:number) {
    return (num % 2 === 0 && num % 3 === 0);
}

let numbertoCheck = 36;

if (checkNumber(numbertoCheck)) {
    console.log(`${numbertoCheck} is divisible by 2 and 3`);
    
}
else{
    console.log(`${numbertoCheck} is not divisible by 2 and 3`);
}