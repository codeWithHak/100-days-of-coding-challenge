function calculateSum (num:number[]):number {
   return num.reduce((acc,currval)=>acc + currval,0);
 
}

let num = [1,2,3,4,5];
console.log(calculateSum(num))