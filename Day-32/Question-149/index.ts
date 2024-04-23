const one = ()=>{
    setTimeout(() => {
        
const two = ()=>{
    console.log("I am two");
}
two()
},0);
    
    console.log("I am one");
}


const three = ()=>{
    console.log("I am three");
}

one()
//three will be moved to queue
three()
