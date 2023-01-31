const hambuger = document.querySelector(".hamburger-btn")
const menu = document.querySelector(".menu-mobile")

hambuger.addEventListener("click",function(event) {
   if (menu.style.display === "none"){
    menu.style.display = "block"
   } else {
    menu.style.display = "none"
   }
})