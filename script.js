// teks typing
const typing = document.querySelector('.teks-3 .type');
const profesi = ['Youtuber', 'Develover' , 'Freelancer'];

let indexProfesi    = 0;
let indexChar       = 0;
let hapus           = false;

function typeEffect() {
    const curProfesi    = profesi[indexProfesi];
    const curChar       = curProfesi.substring(0, indexChar);
    typing.textContent = curChar;
    typing.classList.add('stop-blink');
    if (!hapus && indexChar < curProfesi.length) {
        indexChar++;
        setTimeout(typeEffect, 200);
    } else if (hapus && indexChar > 0) {
        indexChar--;
        setTimeout(typeEffect, 100);
    } else {
        hapus = !hapus; 
        typing.classList.remove('stop-blink');
        indexProfesi = !hapus ? (indexProfesi + 1) % profesi.length : indexProfesi;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

const navbar = document.querySelector('.navbar');
const toggleMenu = document.getElementById('hamburger');
const menubar = document.getElementsByClassName('menubar');

window.onscroll = function () {
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

toggleMenu.onclick = () => {
    document.querySelector('.navbar .menu').classList.toggle('active');
    document.querySelector('.navbar .nav-menu i').classList.toggle('active');
}

for (let i = 0; i < menubar.length; i++) {
    menubar[i].onclick = () => {
        document.querySelector('.navbar .menu').classList.toggle('active');
    document.querySelector('.navbar .nav-menu i').classList.toggle('active');
    }
}