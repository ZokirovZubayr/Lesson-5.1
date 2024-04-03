let day = +prompt("Birdan 7 gacha son kiriting...");
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Dushnaba";
        break;
    case 2:
        dayName = "Seyshanba";
        break;
    case 3:
        dayName = "Chorshanba";
        break;
    case 4:
        dayName = "Payshanba";
        break;
    case 5:
        dayName = "juma";
        break;
    case 6:
        dayName = "Shanba";
        break;

        case 7:
        dayName = "Yakshanba";
        break;

    default:
        dayName = "bunday kun yoq";
}

console.log("yetti kuni ichida " + dayName);