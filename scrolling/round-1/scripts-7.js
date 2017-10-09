$(document).ready(function(){

  $(".circle").each( function() {
    var size = (Math.random())*150;
    $(this).css("background-color", randomColor({hue: 'yellow'}));
    $(this).css("left", (Math.random())*1000);
    $(this).css("top", (Math.random())*1000);
    $(this).css("width", size);
    $(this).css("height", size);
  })


$(window).scroll(function() {

// 1
    $(".circle").each( function() {
      var size = (Math.random())*200;
      $(this).css("background-color", randomColor({hue: 'red'}));
      $(this).animate({left: (Math.random())*1200}, {duration: 500, queue: false});
      $(this).animate({top: (Math.random())*600}, {duration: 500, queue: false});
      $(this).animate({width: size}, {duration: 500, queue: false});
      $(this).animate({height: size}, {duration: 500, queue: false});
    })


    if ($(document).scrollTop() > 100) {
      $(".container1").append("<div class='circle'></div>");
    }
    else {
      $(".container1").remove("<div class='circle'></div>");
    }

  });
});
