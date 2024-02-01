const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav-bar');


menu.addEventListener("click", ( ) => {
    menu.classList.toggle("active")
    navbar.classList.toggle("active")
})