var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Istanbol", "Frankfurt", "Shanghai", "Beijing", "Tokyo"];
console.log("Original order: ", places);
console.log("Alphabetical Order ", __spreadArray([], places, true).sort());
console.log("Original order: ", places);
console.log("Reversed: ", places.reverse());
console.log("Original order: ", places);
console.log("Reversed ", places.reverse());
console.log("Alphabetical Order ", places.sort());
console.log("Reverse Alphabetical Order ", places.sort().reverse());
console.log("Original order: ", places);
