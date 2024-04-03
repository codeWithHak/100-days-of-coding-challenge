//Declaration
// can be called before declaring
console.log(squaringNumDeclaration(2));
function squaringNumDeclaration(num) {
    return Math.pow(num, 2);
}
//Expression
// can not be called befor declaring
var squaringNumExpression = function (num) {
    return Math.pow(num, 2);
};
console.log(squaringNumExpression(2));
