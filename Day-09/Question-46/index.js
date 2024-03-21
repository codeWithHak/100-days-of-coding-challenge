/*

Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.


*/
var laptop = {
    make: "toyota",
    model: "corolla",
    year: 2023
};
function describe(make, model, year) {
    console.log("make of laptop: ".concat(make, "\nmodel of laptop ").concat(model, "\nyear of laptop: ").concat(year, " "));
}
console.log(describe(laptop.make, laptop.model, laptop.year));
