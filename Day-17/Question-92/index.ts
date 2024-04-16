function removeLastItem<T> (arr:T[]): T | undefined {

    return arr.pop()

}
let myArr = [1,2,3,4]
console.log(removeLastItem(myArr))
console.log(myArr);



