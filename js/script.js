var topBtn = document.getElementById('topbtn');
window.addEventListener('scroll', function(){
    console.log(window.scroll);
    console.log(topBtn);
// debugger
(document.documentElement.scrollTop > 350) ? topBtn.style.display = "inline-block" : topBtn.style.display="none";

})

$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            // items : 2 ,
            margin : 30 ,
            // autoplay:true ,
            autoplayTimeout : 1000 ,
            nav:true ,
            dots : false ,
            loop : true,
            navText : [ '<i class="fas fa-long-arrow-alt-left"></i>' , '<i class="fas fa-long-arrow-alt-right"></i>' ] ,
            responsive:{
                0:{
                    items:1,
                    dots : true,
                    autoplay : true
                },
                // 500:{
                //     items:3
                // },
                1000:{
                    items:2,
                    autoplay : false
                }
            }
    
        });
      });

/*form of contact*/

    