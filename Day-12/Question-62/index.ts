/*

Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

*/

interface Student {
    name:string,
    age:number,
    feesPaid:boolean
    subjects:string[]
}

let student: Student ={
    name:"Huzair",
    age:18,
    feesPaid:true,
    subjects:["Maths","English","Computer Science"]
}

console.log(student);

