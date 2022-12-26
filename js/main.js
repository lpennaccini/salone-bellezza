//menu
var mainMenu = document.querySelector('.main-menu');

document.querySelector('.btn-open-menu').onclick = () =>{
    mainMenu.classList.toggle('menu-is-active');
}
document.querySelector('.btn-close-menu').onclick = () =>{
    mainMenu.classList.remove('menu-is-active');
}
window.onscroll = () =>{
    mainMenu.classList.remove('menu-is-active');
}