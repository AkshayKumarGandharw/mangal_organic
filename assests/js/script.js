//check connectivity 
console.log("js connect properly ...");

// code for swiper 

new Swiper('.slider-wrapper', {
    // Optional parameters

    loop: true,
    gapCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBultets: true
    },

    breakpoints: {
        0: {
            slidesPerView: 1.5
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        }
        ,
        1200: {
            slidesPerView: 2.50
        }
    }

});
