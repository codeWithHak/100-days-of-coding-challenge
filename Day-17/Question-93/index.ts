function replaceBanana (fruits:string[]):void {
    const index = fruits.indexOf("banana");
    if (index !== -1) fruits[index] = "mango";
}

let myFruits = ["apple","banana","orange"]
replaceBanana(myFruits);
console.log(myFruits);


