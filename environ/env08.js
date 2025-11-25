$(function () {
  // existing data / panels
  let environmentName = "Shredder's Central";
  let oceanFacts = {
    time: " 24/7",
    surfers: "All levels are welcome: from groms to shredders!",
    creatures: " Check out all the rad animals that sesh with us. Tons of dolphins, seals and otters.",
    season: "All year round"
  };

  // keep the original creatures text so we can toggle back later
  const originalCreaturesText = oceanFacts.creatures;
  let isDolphin = false; // track which image is currently showing

  // helper: write status messages without destroying the panel
  function setStatus(message) {
    $("#output").prepend(
      "<p class='status'>" + message + "</p>"
    );
  }

  // helper: update the "Creatures:" line in the turquoise panel
  function updateCreaturesPanel() {
    $("#output2 .panel.turquoise p").first().html(
      "<strong>Creatures:</strong>" + oceanFacts.creatures
    );
  }

  // initial panel content
  $("#output").append(
    "<div class='panel orange'>" +
      "<h3>Ocean Facts</h3>" +
      "<p><strong>Time:</strong>" + oceanFacts.time + "</p>" +
      "<p><strong>Surfers:</strong> " + oceanFacts.surfers + "</p>" +
    "</div>"
  );

  $("#output2").append(
    "<div class='panel turquoise'>" +
      "<h3>Sea Secrets</h3>" +
      "<p><strong>Creatures:</strong>" + oceanFacts.creatures + "</p>" +
      "<p><strong>Season:</strong>" + oceanFacts.season + "</p>" +
    "</div>"
  );

  // function to swap image + update text (used only when going to dolphin)
  function changeCreature(imgId, newSrc, newAlt, seasonCondition = "any") {
    // optional season check
    if (seasonCondition !== "any" && seasonCondition !== oceanFacts.season) {
      setStatus("Can't transform right now — season condition not met.");
      return;
    }

    const $img = $("#" + imgId);
    if ($img.length === 0) {
      setStatus("Error: image not found.");
      return;
    }

    // change the image
    $img.attr({ src: newSrc, alt: newAlt });

    // update the creatures text (otter -> dolphin)
    oceanFacts.creatures = oceanFacts.creatures.replace(/otters?/i, "dolphins");
    updateCreaturesPanel();

    setStatus("Transformation complete: " + newAlt);
  }

  // CLICK: toggle between otter 🦦 and dolphin 🐬
  $("#transform-button")
    .off("click")
    .on("click", function () {
      if (!isDolphin) {
        // change to dolphin
        changeCreature("otter", "../images/dolphin.png", "Dolphin", "All year round");
        isDolphin = true;
      } else {
        // change back to otter
        const $img = $("#otter");
        $img.attr({ src: "../images/otter.png", alt: "Otter" });

        // restore original creatures text
        oceanFacts.creatures = originalCreaturesText;
        updateCreaturesPanel();

        setStatus("Back to otter mode 🦦");
        isDolphin = false;
      }
    });

  // HOVER on heading: fade waves in/out
  $("#highlight1").hover(
    function () {
      $("#waves").stop(true).fadeOut(200);
    },
    function () {
      $("#waves").stop(true).fadeIn(200);
    }
  );

  // HOVER any gallery thumbnail: brighten hovered, dim siblings
  $(".image-row img").hover(
    function () {
      $(this).stop(true).animate({ opacity: 1 }, 150);
      $(this).siblings().stop(true).animate({ opacity: 0.6 }, 150);
    },
    function () {
      $(this).stop(true).animate({ opacity: 1 }, 150);
      $(this).siblings().stop(true).animate({ opacity: 1 }, 150);
    }
  );

  // HOVER the button: letter spacing animation
  $("#transform-button").hover(
    function () {
      $(this).stop(true).animate({ letterSpacing: "2px" }, 120);
    },
    function () {
      $(this).stop(true).animate({ letterSpacing: "0px" }, 120);
    }
  );

  // DOUBLE-CLICK the otter: special reaction
  $("#otter").dblclick(function () {
    $(this).toggleClass("otter-zoom");
    $("#output2").prepend(
      "<p>The otter just did a double-dive! 🦦</p>"
    );
  });
});