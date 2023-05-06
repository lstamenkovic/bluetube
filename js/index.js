
function openOverlay() {
  document.getElementById("mobile_nav").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  document.getElementById("mobile_nav").style.display = "none";
  document.body.style.overflow = "auto";
}

function openSearchMenu() {
  document.getElementById("search_nav").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeSearchMenu() {
  document.getElementById("search_nav").style.display = "none";
  document.body.style.overflow = "auto";
}

function openSearch() {
  document.getElementById("nav_bigscreen_elements").style.display = "none";
  document.getElementById("search_menu").style.display = "flex";
}

function closeSearch() {
  document.getElementById("search_menu").style.display = "none";
  document.getElementById("nav_bigscreen_elements").style.display = "flex";
}

function openSidenav() {
  document.getElementById("sidenav").style.width = "240px";
  document.body.style.overflow = "hidden";
}
function closeSidenav() {
  document.getElementById("sidenav").style.width = "0";
  document.body.style.overflow = "auto";
}

let prevScrollPosition = window.scrollY;
window.onscroll = () => { 
  let currentScrollPosition = window.scrollY;
    if (prevScrollPosition > currentScrollPosition) {
      document.getElementById("top_nav").style.top = "0px";
    }
    else {
      document.getElementById("top_nav").style.top = "-110px";
    }
    prevScrollPosition = currentScrollPosition;
}

