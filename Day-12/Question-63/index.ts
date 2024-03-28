/*

Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

*/

type Shape = {
    kind: "Circle" | "Rectangle";
    radius?:number;
    height?:number;
    width?:number;
}

let circle:Shape = {
    kind:"Circle",
    radius:5
}

let rectangle:Shape = {
    kind:"Rectangle",
    height:20,
    width:10
}

console.log(circle);
console.log(rectangle);

