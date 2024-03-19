let current_users = ["Abdullah","Khizar","Huzaifa","Hamza","Farrukh"];

let new_users = ["Taha","Abdullah","Moiz","Fahad","Kamran"];


new_users.forEach((newUser)=>{
    let lowercase = newUser.toLowerCase()

    if (current_users.map(currentUser=> currentUser.toLowerCase()).includes(lowercase)) {
        console.log(`${newUser} needs to change his username`);
        
    }
})



