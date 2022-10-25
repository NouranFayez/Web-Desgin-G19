$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2 ,
        margin : 30 ,
        nav : true ,
        loop : true ,
        navText : [ '<i class="fa-solid fa-arrow-left-long"></i>' , '<i class="fa-solid fa-arrow-right-long"></i>' ],
        dots:false ,

        responsive : {
            // breakpoint from 0 up
            0 : {
               items:1,
               autoplay: true

              
            },
            // breakpoint from 480 up
            // 480 : {
            //     option1 : value,
            //     option2 : value,
                
            // },
            // breakpoint from 768 up
            992 : {
                // option1 : value,
                // option2 : value,
                
            }
        }
    });
  });