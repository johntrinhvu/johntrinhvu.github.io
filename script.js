// NAVBAR

let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    let div = document.querySelector(link.hash);
    if (div.offsetTop <= scrollpos + 150 &&
        div.offsetTop + div.offsetHeight > scrollpos + 150) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});