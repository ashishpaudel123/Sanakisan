$('#slider2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplayHoverPause:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})