//Declaration
// can be called before declaring

console.log(squaringNumDeclaration(2));
function squaringNumDeclaration (num:number) {
    return num **2;
}


//Expression
// can not be called befor declaring
const squaringNumExpression = function (num:number) {
    return num **2;
}
console.log(squaringNumExpression(2));


