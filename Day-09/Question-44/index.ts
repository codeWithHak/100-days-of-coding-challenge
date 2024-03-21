/*

Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/

function make_sandwhich(ingredients:string[]){
    console.log("Ingredients in sandwhich");
    for (const ingredient of ingredients) {
        console.log("- " + ingredient);
        
    }
    
}

make_sandwhich(["Chicken","cheese","onion\n"])
make_sandwhich(["beef","tomato\n"])
make_sandwhich(["mayo"])