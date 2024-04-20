let printMePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello, World!")
    },2000)
}).then((message)=>{
    console.log(message);
    
}) 