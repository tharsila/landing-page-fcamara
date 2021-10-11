/*----------------- FAQ -------------------*/

let acc = document.getElementsByClassName('faq-accordion');
let i;
let len = acc.length;

for ( i = 0; i < len; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;

        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
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
