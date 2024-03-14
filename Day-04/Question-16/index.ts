// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
// - Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// - Add one new guest to the beginning of your array.

// - Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

// - Print a new set of invitation messages, one for each person in your list.

let guestList:string[] = ["Babar Azam","Shadab Khan","Saim Ayub"];
guestList.pop()
guestList.push("Naseem Shah")

for (const guest of guestList) {
    console.log(`Dear ${guest}, I would love to have you for dinner tonight.`);
    
}


 export{} // used export just to remove red squiggly line