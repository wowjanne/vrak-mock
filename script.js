function navFade() {
  // sticky header
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  window.onscroll = function () {
    // Get the header
    var header = document.querySelector("header");
    var test = window.pageYOffset;
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      if (test > 300) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    }
  };
}

function slideMenu() {
  var menuBtn = document.getElementById("toggleMenu");
  var header = document.querySelector("header");

  menuBtn.addEventListener("click", (e) => {
    var slideOut = document.getElementById("slide-out-menu");
    var isActive = slideOut.getAttribute("data-active");

    var menuIcon = document.getElementById("icon");

    if (isActive === "false") {
      slideOut.setAttribute("data-active", "true");
      menuIcon.setAttribute("data-active", "true");
      header.classList.add("menu-open");
    } else {
      slideOut.setAttribute("data-active", "false");
      menuIcon.setAttribute("data-active", "false");
      header.classList.remove("menu-open");
    }
  });
}


function menuExpand() {
  var buttons = document.querySelectorAll(".plusminus");

  buttons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
      var contents = document.querySelectorAll(".lvl2");

      let expanded = button.getAttribute("aria-expanded");

      buttons.forEach((button, idx) => {
        button.setAttribute("aria-expanded", "false");
      });

      if (expanded === "true") {
        button.setAttribute("aria-expanded", "false");
      } else {
        button.setAttribute("aria-expanded", "true");
      }

      contents.forEach((content, contentIdx) => {
        if (contentIdx === idx) {
          let hidden = content.getAttribute("aria-hidden");

          if (hidden === "true") {
            content.setAttribute("aria-hidden", "false");
          } else {
            content.setAttribute("aria-hidden", "true");
          }
        } else {
          contents[contentIdx].setAttribute("aria-hidden", "true");
        }
      });
    });
  });
}
function mapInfo() {
  var mapButtons = document.querySelectorAll(".pin");

  mapButtons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
      var mapContent = document.querySelectorAll(".map-info");
      let expanded = button.getAttribute("aria-expanded");

      mapButtons.forEach((button, idx) => {
        button.setAttribute("aria-expanded", "false");
      });

      if (expanded === "true") {
        button.setAttribute("aria-expanded", "false");
      } else {
        button.setAttribute("aria-expanded", "true");
      }

      mapContent.forEach((content, contentIdx) => {
        if (contentIdx === idx) {
          let hidden = content.getAttribute("aria-hidden");

          if (hidden === "true") {
            content.setAttribute("aria-hidden", "false");
          } else {
            content.setAttribute("aria-hidden", "true");
          }
        } else {
          mapContent[contentIdx].setAttribute("aria-hidden", "true");
        }
      });
    });
  });
}

function slider() {
  var nextBtn = document.getElementById("next");
  var prevBtn = document.getElementById("prev");

  var firstSlide = document.getElementById("slide1");
  var secondSlide = document.getElementById("slide2");

  nextBtn.addEventListener(
    "click",
    function () {
      firstSlide.style.opacity = "0";
      secondSlide.style.opacity = "1";
    },
    false
  );

  prevBtn.addEventListener(
    "click",
    function () {
      secondSlide.style.opacity = "0";
      firstSlide.style.opacity = "1";
    },
    false
  );
}

function playButton() {
  var playButton = document.getElementById("play_button");
  var vid = document.getElementById("vid");
  var soundVid = document.getElementById("soundvid");
  // Event listener for the play/pause button
  playButton.addEventListener("click", function () {
    if (vid.paused == true) {
      // Play the video
      vid.play();
      soundVid.pause();
      // Update the button text to 'Pause'
      playButton.style.display = "none";

      vid.setAttribute("controls", "controls");
    }
  });
}



function playSound() {
  var playBtn = document.getElementById("logo");
  var sound = document.getElementById("soundvid");
  // Event listener for the play/pause button
  playBtn.addEventListener("click", function () {
    if (sound.paused == true) {
      // Play the video
      sound.play();

    }
  });
}



window.onload = function () {
  navFade();
  slideMenu();
  menuExpand();
  mapInfo();
  slider();
  playButton();  playSound();

};
