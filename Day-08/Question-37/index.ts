/*
Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

let make_shirt = (size:string="large", msg:string="I Love TyprScript")=>{

    if (size == "Large" || "large" ||"LARGE") {
        console.log(`Shirt Size is ${size} and the message printed is ${msg}`);
    }
  
}

make_shirt()
make_shirt("medium")
make_shirt("small", "Hello, World!")

export{}