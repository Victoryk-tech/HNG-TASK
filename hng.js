const header = document.querySelector("header");
let menuIcon = document.getElementById("menu-icon");
let navigation = document.querySelector("navigation");
let navHome = document.getElementById("nav-home");
let closetBtn = document.getElementById("bx-x");
let bodyWhole = document.getElementById("wrapper");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("time").textContent = utcTime;
  document.getElementById("day").textContent = day;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
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
  document.getElementById("goals").scrollIntoView();
}

function scroll_to_contact() {
  document.getElementById("contact").scrollIntoView();
}
function scroll_to_home() {
  document.getElementById("scroll").scrollIntoView();
}
