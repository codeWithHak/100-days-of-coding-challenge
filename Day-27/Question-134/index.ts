let myInfo = {
    name:"huzair",
    age:18,
    gender:"male"
}
let jsonMyInfo = JSON.stringify(myInfo)
console.log(jsonMyInfo);
let jsonToObject = JSON.parse(jsonMyInfo)
console.log(jsonToObject);
