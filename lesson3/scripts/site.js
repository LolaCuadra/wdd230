function toggleMenu(){
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
} 
// call to void 
// first order of functions

document.querySelector("#hamburger-menu").onclick = toggleMenu;

