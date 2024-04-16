"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myInfo = {
    name: "huzair",
    age: 18,
    gender: "male"
};
var jsonMyInfo = JSON.stringify(myInfo, null, 2);
console.log(jsonMyInfo);
