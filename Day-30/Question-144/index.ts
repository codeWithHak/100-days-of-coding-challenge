let task1 = new Promise((resolve,reject)=>{
    resolve("Task 1 is done")
})

let task2 = new Promise((resolve,reject)=>{
    resolve("Task 2 is done")
})

let task3 = new Promise((resolve,reject)=>{
    resolve("Task 3 is done")
})

Promise.all([
    task1,
    task2,
    task3
]).then((messages)=>{
    console.log(messages);
    
})
