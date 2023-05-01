
// *********  our service page animation by javascript started here **********

$(document).ready(function () {
    $(window).scroll(function () {
      var postiontop = $(document).scrollTop();
      console.log(postiontop);
    })
  })

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 110 &&($(window).scrollTop()<310)){
        $(".row").addClass("slide-in-right");
    } else {
        $(".row").removeClass("slide-in-right");
    }
  }); 
  
  


  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 250 &&($(window).scrollTop()<500)){
        $(".col-lg-3").addClass("wooble");
    } else {
        $(".col-lg-3").removeClass("wooble");
    }
  });

  
  
  // *********  our service page animation by javascript ended here **********