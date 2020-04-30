const about = document.getElementById("about-button");
const popup = document.getElementById("about-popup");
const x = document.getElementById("x");

about.addEventListener("click", () => {
  popup.className = "";
});

x.addEventListener("click", () => {
  popup.className = "hidden";
});

const indexButton = document.getElementById("index-button");
const indexPopup = document.getElementById("index-popup");
const indexX = document.getElementById("index-x");

indexButton.addEventListener("click", () => {
  indexPopup.className = "";
});

indexX.addEventListener("click", () => {
  indexPopup.className = "hidden";
});
