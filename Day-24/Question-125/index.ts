let insiderFunction = {
    name: "huzair",
    age: 18,
    getAge: function () {
      return this.age;
    },
    getName:function() {
        return this.name
    }
  };
  
  console.log(insiderFunction.getAge());
  console.log(insiderFunction.getName());
  export{}