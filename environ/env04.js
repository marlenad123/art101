$(function () {
  // existing data / panels
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
      "<p><strong>Season:</strong>" + oceanFacts.season + "</p>" +
      "</div>" 
  );

  // function to swap image + update text
  function changeCreature(imgId, newSrc, newAlt, seasonCondition = "any") {
    // optional season check
    if (seasonCondition !== "any" && seasonCondition !== oceanFacts.season) {
      $("#output").text("Can't transform right now — season condition not met.");
      return;
    }

    const $img = $("#" + imgId);
    if ($img.length === 0) {
      $("#output").text("Error: image not found.");
      return;
    }

    // change the image
    $img.attr({ src: newSrc, alt: newAlt });

    // update the creatures text
    oceanFacts.creatures = oceanFacts.creatures.replace(/otters?/i, "dolphins");
    $("#output2 .panel.turquoise p").first().html("<strong>Creatures:</strong>" + oceanFacts.creatures);

    $("#output").text("Transformation complete: " + newAlt);
  }

  //attach click to the button in your HTML
  // Make sure your HTML has: <button id="transform-button">Click Me!</button>
  $("#transform-button").off("click").on("click", function () {
    // adjust path if your dolphin image is elsewhere
    changeCreature("otter", "../images/dolphin.png", "Dolphin", "All year round");
  });
}); 