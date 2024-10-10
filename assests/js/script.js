//check connectivity 
console.log("js connect properly ...");

// code for header

const my_header = document.querySelector("#my_header");

    window.addEventListener('scroll',()=>{

            if(window.scrollY >= 100)
            {
                my_header.classList.add("scroll-header");
            }
            else if(window.scrollY < 100)
            {
                my_header.classList.remove("scroll-header");
            }
            
    });








// code for swiper 

new Swiper('.slider-wrapper', {
    // Optional parameters

    loop: true,
    gapCursor: true,
    spaceBetween:20,
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
            slidesPerView: 3
        },
        576: {
            slidesPerView: 3
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
