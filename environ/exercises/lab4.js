// declaring an array with name myCommutes
let myCommutes = ["my car", "UCSC taps bus", "metro bus", "my boyfriend", "friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "My Car",
    route: 1,
    print: "bear",
    hasMiddleDoor: true,
    drivers: ["Bob Dylan", "the girl with beautiful hair", "the guy with a blue beard"],

};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output") . html (megaSentence) ; 