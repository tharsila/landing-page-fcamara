/*----------------- FAQ -------------------*/

let acc = document.getElementsByClassName('faq-accordion');
let i;
let len = acc.length;

function handleAccordion () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    
    if(panel.style.maxHeight) {
         panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

for ( i = 0; i < len; i++) {
    acc[i].addEventListener('click', handleAccordion);
}

/*-------------- Menu hamburguer -------------------*/

let showMenu = document.getElementById('menu-hamburguer');

showMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    let nav = document.getElementById('nav')
    nav.classList.toggle('show-menu');
}

/*------------ REMOVER MENU MOBILE -------------*/
let navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', removeMobile);
navLink.forEach(n => n.addEventListener('click', removeMobile));

/*Quando um link ou o botão close for clicado a class show-menu será removido*/
function removeMobile () {
    let navMenu = document.getElementById('nav');
    navMenu.classList.remove('show-menu');
}

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
let linkColor = document.querySelectorAll('.nav-link');

linkColor.forEach(l => l.addEventListener('click', colorLink));

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');
    }
}

/*------------------- Scroll suave -------------------------------*/

const menuLink = document.querySelectorAll('a[href^="#"]');

document.querySelectorAll('a[href^="#"]')

    function anchorActive (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior:'smooth',
            block:'start',
        })
    }

menuLink.forEach((link) => {
    link.addEventListener('click', anchorActive);
})
