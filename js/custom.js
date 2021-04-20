$(function(){


  $('.top-btm').click(function(){
    $('html, body').animate({scrollTop:0}, 1000);
});

      $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 200){
        $('.top-btm').fadeIn(500);
     }
    else {
        $('.top-btm').fadeOut(500);
    }
    if(scrolling > 200){
        $('.navbar').addClass('nav-bg');
    }
    else {
        $('.navbar').removeClass('nav-bg');
    }
});



// CounterUp
$('.counter').counterUp({
  delay: 5,
  time: 3000,
});


// lightbox
$('.venobox').venobox(); 

// Blog Slider

$('.blog-slick').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
arrows:false,
autoplaySpeed: 1500,
centerMode:true,
centerPadding:false,

responsive: [
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    }
  },
  
]

    
});


 //animation scroll js
 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 80
             }, 1500);
             return false;
         }
     }
 });











});