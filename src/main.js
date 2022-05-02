// carrossel
const swiper = new Swiper('.swiper',{
    slidePerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        850:{
            slidesPerView:2,
            setWrapperSize:true,

        }
    }
})