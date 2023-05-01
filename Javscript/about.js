
// *********  about page animation by javascript started here **********

$(document).ready(function () {
    $(window).scroll(function () {
      var postiontop = $(document).scrollTop();
      console.log(postiontop);
    })
  })
  


  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 76 &&($(window).scrollTop()<500)){
        $(".img-fluid").addClass("wooble");
    } else {
        $(".img-fluid").removeClass("wooble");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 76 &&($(window).scrollTop()<500)){
        $(".col-lg-6").addClass("slide-in-right");
    } else {
        $(".col-lg-6").removeClass("slide-in-right");
    }
  });
  
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 700 &&($(window).scrollTop()<900)){
        $(".row").addClass("Shake");
    } else {
        $(".row").removeClass("Shake");
    }
  });




  
  
  // *********  about page animation by javascript ended here **********