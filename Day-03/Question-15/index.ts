// Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list.

let guestList:string[] = ["Babar Azam","Shadab Khan","Saim Ayub"];
for (const guest of guestList) {
    console.log(`Dear ${guest}, I would love to have you for dinner tonight.`);
            
}
console.log(`\n${guestList[2]} won't be able to attend dinner tonight\n`);

guestList.pop()
guestList.push("Naseem Shah")

for (const guest of guestList) {
    console.log(`Dear ${guest}, I would love to have you for dinner tonight.`);
    
}


 export{} // used export just to remove red squiggly line