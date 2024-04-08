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

            //default code block  
        default:console.log("Ask for a month btween 1 to 12");
        
            break;
    }
}

season(14)
//Default code will be executed