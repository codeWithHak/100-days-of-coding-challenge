/*

Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.


*/

let listOfNums:number[] = [1,2,3,4,5,6];
console.log("Original List: " + listOfNums);
let newListOfNums:number[] = listOfNums.map((nums)=>nums*2) 
console.log("After Multiplication: " + newListOfNums);
