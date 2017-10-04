$(document).ready(function(){

  $(".circle").each( function() {
    var size = (Math.random())*150;
    $(this).css("background-color", randomColor({hue: 'yellow'}));
    $(this).css("left", (Math.random())*1000);
    $(this).css("width", size);
    $(this).css("height", size);
  })


$(window).scroll(function() {

// 1
    $(".circle").each( function() {
      var size = (Math.random())*200;
      $(this).css("background-color", randomColor({hue: 'red'}));
      $(this).animate({left: (Math.random())*1000});
      $(this).animate({width: size});
      $(this).animate({height: size});
    })


    // if ($(document).scrollTop() > 100) {
    //   $(".container1").append("<div class='circle'></div>");
    // }
    // else {
    //   $(".container1").remove("<div class='circle'></div>");
    // }

  });
});
