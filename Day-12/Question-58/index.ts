
function averageGrade (...num:number[]):number {

    let average = num.reduce((a,b)=> a+b, 0 )/ num.length
    return average
    
}

console.log(averageGrade(20,40,60,80,100));




export{}
