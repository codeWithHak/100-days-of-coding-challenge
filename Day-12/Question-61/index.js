/*

Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

*/
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["jeep"] = 2] = "jeep";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.car);
