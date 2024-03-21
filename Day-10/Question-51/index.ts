/*

Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

*/

function area (height:number,width:number){
    return height * width
} 
console.log(area(10,20));


let areaArrow = (height:number,width:number)=> height * width;
    
   
console.log(areaArrow(10,20));
