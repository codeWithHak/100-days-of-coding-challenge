function returnGreaterThanTen (num:number[]):number[] {

    let returning = numbers.filter((num)=> num>10 )
    return returning
}

let numbers = [1,5,10,15,20,25,30];
console.log(returnGreaterThanTen(numbers));