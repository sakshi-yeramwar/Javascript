let dayNum = 3;

let dayOfWeek;

switch (dayNum) {
    case 1:
        dayOfWeek = "Monday";
        break;
    
    case 2:
        dayOfWeek = "Tuesday";
        break;   
            
    case 3:
        dayOfWeek = "Wednesday";
        break;

    case 4:
        dayOfWeek = "Thursday";
        break;

    case 5:
        dayOfWeek = "Friday";
        break;

    case 6:
        dayOfWeek = "Saturday";
        break;

    case 7:
        dayOfWeek = "Sunday";
        break;

    default:
    dayOfWeek = "Invalid dayNum";
    break;
}

console.log("Day of the week number "+dayNum+" is "+dayOfWeek);