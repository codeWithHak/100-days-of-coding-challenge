/*

Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/

let magician_names:string[] = ["magician 1","magician 2","magician 3"];

function show_magicians(magicians:string[]){
    for (const magician of magicians) {
        console.log(magician);
        
    }
}


function make_great(magicians:string[]){
   for (let i = 0; i < magicians.length; i++) {
     magicians[i] = magicians[i] + " the Great";
    
   }
}

make_great(magician_names)
show_magicians(magician_names)
show_magicians(magician_names)

export{}
