/*

Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.


*/

let laptop:{make:string;model:string;year:number} = {
    make:"toyota",
    model:"corolla",
    year:2023
}

function describe (make:string,model:string,year:number) {
    console.log(`make of laptop: ${make}\nmodel of laptop ${model}\nyear of laptop: ${year} `);
    
}

console.log(describe(laptop.make,laptop.model,laptop.year));


export{}