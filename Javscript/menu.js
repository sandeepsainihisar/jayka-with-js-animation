
// *********  menu page animation by javascript started here **********

$(document).ready(function () {
    $(window).scroll(function () {
      var postiontop = $(document).scrollTop();
      console.log(postiontop);
    })
  })

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100 &&($(window).scrollTop()<300)){
        $(".row").addClass("slide-in-right");
    } else {
        $(".row").removeClass("slide-in-right");
    }
  });

  
  
  // *********  menu page animation by javascript ended here **********