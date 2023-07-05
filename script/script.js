/*
Submitted by Marcin Wojtowicz [one_spook@hotmail.com] 
Featured on JavaScript Kit (http://javascriptkit.com)
Modified by JK to be IE7+/ Firefox compatible
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

var trailLength = 300; // The length of trail (8 by default; put more for longer "tail")
var path = "../img/rock.png"; // URL of your image

var standardbody =
  document.compatMode == "CSS1Compat"
    ? document.documentElement
    : document.body; //create reference to common "body" across doctypes
var i,
  d = 0;

function initTrail() {
  // prepares the script
  images = new Array(); // prepare the image array
  for (i = 0; i < parseInt(trailLength); i++) {
    images[i] = new Image();
    images[i].src = path;
  }
  storage = new Array(); // prepare the storage for the coordinates
  for (i = 0; i < images.length * 3; i++) {
    storage[i] = 0;
  }
  for (i = 0; i < images.length; i++) {
    // make divs for IE and layers for Navigator
    document.write(
      '<div id="obj' +
        i +
        '" style="position: absolute; z-Index: -1; height: 0; width: 0;"><img src="' +
        images[i].src +
        '"></div>'
    );
  }
  trail();
}
function trail() {
  // trailing function
  for (i = 0; i < images.length; i++) {
    // for every div/layer
    document.getElementById("obj" + i).style.top = storage[d] + "px"; // the Y-coordinate
    document.getElementById("obj" + i).style.left = +storage[d + 1] + "px"; // the X-coordinate
    d = d + 2;
  }
  for (i = storage.length; i >= 2; i--) {
    // save the coordinate for the div/layer that's behind
    storage[i] = storage[i - 2];
  }
  d = 0; // reset for future use
  var timer = setTimeout("trail()", 5); // call recursively
}
function processEvent(e) {
  // catches and processes the mousemove event
  if (window.event) {
    // for IE
    storage[0] = window.event.y + standardbody.scrollTop - images[0].height / 2;
    storage[1] =
      window.event.x + standardbody.scrollLeft - images[0].height / 2;
  } else {
    storage[0] = e.pageY - images[0].height / 2;
    storage[1] = e.pageX - images[0].width / 2;
  }
}

initTrail();
document.onmousemove = processEvent; // start capturing

//-->

function showSubscribe() {
  const fadeIn = [{ opacity: "0" }, { opacity: "1" }];
  const fadeout = [{ opacity: "1" }, { opacity: "0" }];

  const fadeDuration = {
    duration: 300,
    iterations: 1,
  };

  const subCont = document.getElementById("klaviyo-container");
  const expandBtn = document.getElementById("sub-expand");
  const closeBtn = document.getElementById("close-sub");
  const footer = document.getElementById("footer");

  expandBtn.addEventListener("click", () => {
    var state = subCont.getAttribute("class");

    setTimeout(() => {
      subCont.className = "";
      subCont.animate(fadeIn, fadeDuration);
    }, 299);
    footer.style.display = "none";
  });
  closeBtn.addEventListener("click", () => {
    var state = subCont.getAttribute("class");
    console.log(state);
    setTimeout(() => {
      subCont.className = "hidden";
    }, 299);
    footer.style.display = "block";
    subCont.animate(fadeout, fadeDuration);
  });
}

showSubscribe();
