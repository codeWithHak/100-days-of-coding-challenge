let guestList:string[] = ["Babar Azam","Shadab Khan","Saim Ayub"];

console.log(`\nHello guys a found a bigger table\n`);

guestList.unshift("Chris Hemsworth");
guestList.splice(2,0,"Chris Evans");
guestList.push("Cillian Murphy")

for (const guest of guestList) {
    console.log(`Dear ${guest}, I would love to have you for dinner tonight.`);
    
}


 export{} // used export just to remove red squiggly line