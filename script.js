// Baseline version: basic display toggle, with no ARIA state or Escape handling.
document.getElementById("toggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "none" ? "flex" : "none";
});