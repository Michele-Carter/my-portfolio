let burgerNav = document.getElementById('burger-nav');
let burgerList = document.getElementById('burger-list');

function dropdown_toggle() {
	burgerList.classList.toggle('hidden');
}

burgerNav.addEventListener('click', dropdown_toggle);
	
/* return to top button */


/* back to top button */
function totop () {
  window.scroll({
    top: 0, left: 0, behavior: 'smooth'
  });
}

// (C2) SHOW/HIDE BUTTON
function togtop () {
  if (window.scrollY >= 100) {
    document.getElementById("backtop").classList.add("show");
  } else {
    document.getElementById("backtop").classList.remove("show");
  }
}
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);
