// *********  index page animation by javascript started here **********

$(document).ready(function () {
    $(window).scroll(function () {
      var postiontop = $(document).scrollTop();
      console.log(postiontop);
    })
  })
  

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 76 &&($(window).scrollTop()<690)){
      $(".row").addClass("slide-in-right");
  } else {
      $(".row").removeClass("slide-in-right");
  }
}); 

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 600 &&($(window).scrollTop()<1200)){
      $(".row").addClass("Bounce-top");
  } else {
      $(".row").removeClass("Bounce-top");
  }
}); 

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1100 &&($(window).scrollTop()<1400)){
      $(".row").addClass("wooble");
  } else {
      $(".row").removeClass("wooble");
  }
}); 
 
// *********  index page animation by javascript started here **********
