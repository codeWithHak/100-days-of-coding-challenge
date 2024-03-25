function createObjWithDynamicKey(key, value) {
    var dynamicObj = {};
    dynamicObj[key] = value;
    return dynamicObj;
}
var userPref = createObjWithDynamicKey("color", "black");
console.log(userPref);
