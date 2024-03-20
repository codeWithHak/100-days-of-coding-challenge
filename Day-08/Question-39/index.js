/*
Q39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
var city_country = function (city, country) {
    console.log("".concat(city, ",").concat(country));
};
city_country("Karachi", "Pakistan");
city_country("Mumbai", "India");
city_country("Tokyo", "Japan");
