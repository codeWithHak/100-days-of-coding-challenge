/*

Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.

*/

function season (month:number) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("Winter");
            
            break;

        case 6:
        case 7:
        case 8:
            console.log("Summer");          
            break;

        case 3:
        case 4:
        case 5:
            console.log("Spring");          
            break;
                
        case 3:
        case 4:
        case 5:
            console.log("Spring");          
            break;

        default:
        
            break;
    }
}

season(4)


export{}