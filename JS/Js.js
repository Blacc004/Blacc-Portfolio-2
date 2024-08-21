 const sr = Scrollreveal ({
    distance: '35px',
    duratio: 2400,
    reset: true
});

 sr.reveal('.main-img', {delay:210, origin: 'left'});
 sr.reveal('.main-text h1', {delay:310, origin: 'top'});
 sr.reveal('.main-text h4', {delay:410, origin: 'right'});
 sr.reveal('.social', {delay:210, origin: 'bottom'});

 sr.reveal('.row', {delay:510, origin: 'left'});
 sr.reveal('.button', {delay:610, origin: 'top'});
 sr.reveal('.center', {delay:710, origin: 'left'});
 sr.reveal('.portfolio', {delay:810, origin: 'top'});

 /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.row, .button`,{origin: 'right'})
