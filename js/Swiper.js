var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 10,
            autoplay: false,
        }
    }
});