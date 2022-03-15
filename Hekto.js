const hamburger = document.querySelector(".svg");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});