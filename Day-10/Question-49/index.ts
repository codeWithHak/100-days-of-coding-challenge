/*

Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

*/

function hobbies (...rest:string[]) {
    for (const hobby of rest) {
        console.log(`I enjoy ${hobby} a lot`);
        
    }
}

hobbies("Cricket","Gaming","Coding")