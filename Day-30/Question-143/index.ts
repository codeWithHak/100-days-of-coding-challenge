let userWatching = false;
let userLeft = true;

let checkUser = new Promise((resolve,reject)=>{
    if (userLeft) {
        reject( new Error("User left"))
    }

    else if (userWatching) {
        resolve("User is watching")
    }

}).then((message)=>{
    console.log("Success: ", message);
    
}).catch((error)=>{
    console.log(error.name,error.message);
    
})

export{}