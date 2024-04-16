let diffOfThis = {
    value:"Value Of Function",

    traditionalFunction: function () {
        console.log("Traditional",this.value);
    },

    // arrowFunction: ()=>{
    //     console.log("arrow",this.value);
        
    // }
}

diffOfThis.traditionalFunction()
// diffOfThis.arrowFunction()


