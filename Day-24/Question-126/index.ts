let obj = {
    name:"huzair",
    outerMethod: function () {
        console.log(this.name);
      
       let innerMethod = ()=> {
            console.log(this.name);
            
        }
       innerMethod()
    }
}

obj.outerMethod()

