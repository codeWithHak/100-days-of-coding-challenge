"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newMap = new Map();
newMap.set("Pakistan", "Islamabad");
newMap.set("Japan", "Tokyo");
newMap.set("Germany", "Berlin");
function checkKey(newMap) {
    if (newMap.has("Canada")) {
        console.log(newMap.get("Canada"));
    }
    else {
        console.log("Canada is not included in the map");
    }
}
checkKey(newMap);
