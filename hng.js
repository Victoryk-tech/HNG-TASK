const header = document.querySelector("header");
let menuIcon = document.getElementById("menu-icon");
let navigation = document.querySelector("navigation");
let navHome = document.getElementById("nav-home");
let closetBtn = document.getElementById("bx-x");
let bodyWhole = document.getElementById("wrapper");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

menuIcon.addEventListener("click", () => {
  navHome.style.visibility = "visible";
  menuIcon.style.visibility = "hidden";
  closetBtn.style.visibility = "visible";
});

closetBtn.addEventListener("click", () => {
  navHome.style.visibility = "hidden";
  closetBtn.style.visibility = "hidden";
  menuIcon.style.visibility = "visible";
});

// scroll on view
function scroll_to_target() {
  document.getElementById("about").scrollIntoView();
}

function scroll_to_projects() {
  document.getElementById("projects").scrollIntoView();
}

function scroll_to_contact() {
  document.getElementById("contact").scrollIntoView();
}
