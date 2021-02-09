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

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver
function (
    entries, appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});