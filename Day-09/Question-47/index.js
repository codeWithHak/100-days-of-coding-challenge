/*

Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

*/
var laptop = [{
        make: "hp",
        model: "high performer",
        year: 2023
    },
    {
        make: "dell",
        model: "power build",
        year: 2022
    },
    {
        make: "apple",
        model: "macbook",
        year: 2021
    },
];
var firsLaptop = laptop[0];
console.log("First Laptop: ", firsLaptop);
var secondLaptop = laptop[1];
console.log("Second Laptop: ", secondLaptop);
