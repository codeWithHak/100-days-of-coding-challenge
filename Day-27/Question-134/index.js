var myInfo = {
    name: "huzair",
    age: 18,
    gender: "male"
};
var jsonMyInfo = JSON.stringify(myInfo);
console.log(jsonMyInfo);
var jsonToObject = JSON.parse(jsonMyInfo);
console.log(jsonToObject);
