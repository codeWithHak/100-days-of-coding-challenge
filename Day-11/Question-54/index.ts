function createObjWithDynamicKey (key:string, value:string){

    let dynamicObj:{ [key: string]: string } = {};
    dynamicObj[key] = value;
    return dynamicObj;
}

let userPref = createObjWithDynamicKey("color","black")

console.log(userPref);

export{}
