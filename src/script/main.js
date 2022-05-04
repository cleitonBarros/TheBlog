


 
// carrossel
const swiper = new Swiper('.swiper',{
    slidePerView: 1,
    
    
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    
    watchOverflow:false,
    
    breakpoints:{
        615:{
            slidesPerView:2,
            setWrapperSize:true,
          
     
        },
        901:{
            slidesPerView:3,
            setWrapperSize:true,
            pagination: false,
            loop:false,
        }
        },
  
})