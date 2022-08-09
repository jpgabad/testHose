// Nav
$(document).ready(function(){
  $('.nav-button').click(function(){
    $('body').toggleClass('nav-open');
  });


  $(window).scroll(function () {

  if ($(document).scrollTop() > 100) {
      $('.js-change').addClass('onscroll-bg',100);
      

  } else {
  $('.js-change').removeClass('onscroll-bg',300);
  $('.js-change').addClass('transition');     
  
  }	
});



});


function openNav() {
  document.getElementById("myNav").style.width = "350px";
  document.getElementById("myNav").style.opacity = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.opacity = "0%";
}



$('.mybtnLink').on('click', function(event) {
  event.preventDefault(); 
  var url = $(this).data('target');
  location.replace(url);
});

$(function () {
$(document).scroll(function () {
  var $nav = $(".fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});


// WOW JS
new WOW().init();

// var scroll = new SmoothScroll('a[href*="#"]', {
//   ignore: '[data-scroll-ignore]'
// });


$('.mybtnLink').on('click', function(event) {
  event.preventDefault(); 
  var url = $(this).data('target');
  location.replace(url);
});

$(function () {
$(document).scroll(function () {
  var $nav = $(".fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});




//<!-------------------Captcha Script------------------------------>

    //Refresh Captcha
    function refreshCaptcha(){
        var img = document.images['captcha_image'];
        img.src = img.src.substring(
            0,img.src.lastIndexOf("?")
        )+"?rand="+Math.random()*1000;
    }
