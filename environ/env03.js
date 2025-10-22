let environmentName= "Shredder's Central";
let oceanFacts= {
    time: " 24/7",
    surfers: "All levels are welcome: from groms to shredders!",
    creatures: " Check out all the rad animals that sesh with us. Tons of dolphins, seals and otters.",
    season: "All year round"
};

$("#output").append(
    "<div class= 'panel orange'>" +
    "<h3>Ocean Facts</h3>" +
    "<p><strong>Time:</strong>" + oceanFacts.time + "</p>" +
    "<p><strong>Surfers:</strong> " + oceanFacts.surfers + "</p>" +
    "</div>" 
);

$("#output2").append(
    "<div class= 'panel turquoise'>" +
    "<h3>Sea Secrets</h3>" +
    "<p><strong>Creatures:</strong>" + oceanFacts.creatures + "</p>" +
    "<p><strong>Season:</strong> " + oceanFacts.season + "</p>" +
    "</div>" 
)