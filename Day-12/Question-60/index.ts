let userProfile = (function () {
   let name = "Huzair"
   let age = 18

   return {
             displayInfo:function () {
          console.log(`Name is ${name} and age is ${age}`);
                
    }
   }
    
}
)();

userProfile.displayInfo()
