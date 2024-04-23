// Syncronhus operation

const one = ()=>{
    console.log("I am one");
}
const two = ()=>{
    console.log("I am two");
}
const three = ()=>{
    console.log("I am three");
}
one();
two();
three();

// Asynchronus operation

// four will be queued by even loop 
const four = ()=>{
    setTimeout(()=>{
    console.log("I am four");
},0)}
const five = ()=>{
    console.log("I am five");
}
const six = ()=>{
    console.log("I am six");
}
four();
five();
six();
export{}