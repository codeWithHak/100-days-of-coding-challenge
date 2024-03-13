// Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let myFriends = ["Huzaifa","Hamza","Khizar"];

for (const friend of myFriends) {
    let message = `Hello ${friend} you are a good friend.`
    console.log(message);
    
}

export{} // used export just to remove red squiggly line