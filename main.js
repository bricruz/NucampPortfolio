let main = document.querySelector('.main');
let nav = document.querySelector('.nav');

let offset = main.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
    if (window.pageYOffset > offset) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    }
    else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');
    }
}