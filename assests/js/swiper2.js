// check connectivity 
console.log("swiper 2 connected");


//code for swiper 2 

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
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
        ,
        1200: {
            slidesPerView: 3
        }
    }

});
