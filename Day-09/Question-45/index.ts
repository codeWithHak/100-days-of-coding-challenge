/*

Q45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


*/

function carInfo (manufacturer:string,model:string,...otherOption:{[key:string]: any}[]):object {
const info = {
    manufacturer,
    model,
    ...Object.assign({},...otherOption)
}
return info;
}

let result = carInfo("Toyota","Corolla",{color:"black"},{gear:"auto"},{features:["Power steering","Rear Camera"]})
console.log(result);
