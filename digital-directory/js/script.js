const about = document.getElementById("about-button");
const popup = document.getElementById("popup");
const x = document.getElementById("x");

about.addEventListener("click", () => {
  popup.className = "";
});

x.addEventListener("click", () => {
  popup.className = "hidden";
});
