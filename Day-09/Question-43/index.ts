/*

Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/



let magician_names:string[] = ["magician 1","magician 2","magician 3"];


function copyOfMagicians (arr:string[]){
    return [...arr]
}

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

const copyOfMagiciansArr = copyOfMagicians(magician_names)

make_great(copyOfMagiciansArr)
console.log("this is my original array");
show_magicians(magician_names);
console.log("\nthis is my modified array");
show_magicians(copyOfMagiciansArr)








export{}