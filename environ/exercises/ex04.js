
let count = 0; 
let colors= ["Orchid", "Coral", "HotPink", "Plum"]; //new line tp add

$("#needy-button").click( function () {

 
    let reminder=count % colors.length;

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] ); //new line tp add

    $("body").css("background-color", colors [reminder]);

    count= count + 1;

 
});



//when it is clicked 
//add one to the total number 

//show the total number 
//on our button
//show "clicked total number times"

//a top limit
