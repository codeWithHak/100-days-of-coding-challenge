function product (...num1:number[]) {
    return num1.reduce((acc,curr)=>acc * curr)
}


export default product