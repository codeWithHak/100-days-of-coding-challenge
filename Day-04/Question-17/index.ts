//Q16
let guestList:string[] = ["Babar Azam","Shadab Khan","Saim Ayub"];

console.log(`\nHello guys a found a bigger table\n`);

guestList.unshift("Chris Hemsworth");
guestList.splice(2,0,"Chris Evans");
guestList.push("Cillian Murphy")

for (const guest of guestList) {
    console.log(`Dear ${guest}, I would love to have you for dinner tonight.`);
    
}

//Q17

console.log("\nSoryy guys only two of you can come\n");
while (guestList.length > 2) {
    let removedGuest = guestList.pop()
    console.log(`Sorry ${removedGuest} we will meet again sometime `);
    
}

for (const guest of guestList) {
    console.log(`Mr ${guest} you are still invited`);
    
}

while (guestList.length < 1) {
    let emptyList = guestList.pop()
    console.log(emptyList);
}

export{} // used export just to remove red squiggly line