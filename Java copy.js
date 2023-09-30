const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const salirads= document.querySelector(".cerrar_ads");
const ads2= document.querySelector(".ads2");
const salirads3= document.querySelector(".cerrar_ads3");
const ads3= document.querySelector(".ads3");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

salirads.addEventListener("click", () => {
  ads2.classList.add("hiden");
})

salirads3.addEventListener("click", () => {
  ads3.classList.add("hiden");
})