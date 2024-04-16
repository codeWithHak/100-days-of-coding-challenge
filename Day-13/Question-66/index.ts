/*

Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

*/

function checkBooleans (bool1:boolean,bool2:boolean){
    if (bool1 && bool2 === true) {
        return true
    }

    else {
        return false
    }
}

let showBooleans = checkBooleans(false,true);
console.log(showBooleans);
