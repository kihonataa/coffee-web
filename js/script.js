// toggle class active
const navBarNav = document.querySelector ('.navbar-nav');
// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navBarNav.classList.toggle('active');
};
// klik diluar sidebar
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) { 
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});