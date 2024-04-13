let multipleValues = (...val:number[])=>
    val.reduce((acc,curr)=>acc * curr);


console.log(multipleValues(1,2,4));
