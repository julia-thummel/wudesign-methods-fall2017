$(document).ready(function(){


function style() {
  $(".unstyled").each( function() {
    $(this).css("background-color", randomColor({hue: 'red'}));
    $(this).css("width", 0);
    $(this).css("height", 0);
    $(this).data("scrollSpeed", (Math.random())*6);
    $(this).removeClass("unstyled");
  })
};

style();


$(window).scroll(function() {

  var left = $(window).scrollTop();
  var right = ($(window).scrollTop() * -1);
  var size = $(window).scrollTop();

  $(".circle1").each( function() {
    // $(this).css("left", left);
    // $(this).css("width", 1/size);
    // $(this).css("height", 1/size);
    // $(this).css("background-color", randomColor({hue: 'red'}));
    var speed = $(this).data("scrollSpeed");
    var pos = -($(window).scrollTop()*(speed));
    $(this).css("left" , pos + "px");
    // $(this).animate({left: left}, {duration: Math.random()*500, queue: false}).delay(10000*Math.random());
    $(this).css("width", size/2);
    $(this).css("height", size/2);
    $(this).css("opacity", left/500);
    // $(this).animate({transform: scale(size)}, {duration: 500, queue: false});
    // $(this).animate({height: size}, {duration: 500, queue: false});
  });

    $(".circle2").each( function() {
      // $(this).css("left", left);
      // $(this).css("width", 1/size);
      // $(this).css("height", 1/size);
      // $(this).css("background-color", randomColor({hue: 'red'}));
      var speed = $(this).data("scrollSpeed");
      var pos = -($(window).scrollTop()*(speed));
      $(this).css("right" , pos + "px");
      // $(this).animate({left: right}, {duration: Math.random()*500, queue: false}).delay(10000*Math.random());
      $(this).css("width", size/2);
      $(this).css("height", size/2);
      $(this).css("opacity", left/500);
      // $(this).animate({transform: scale(size)}, {duration: 500, queue: false});
      // $(this).animate({height: size}, {duration: 500, queue: false});
    });


    if ($(document).scrollTop() > 100) {
      $(".container1").append("<div class='circle1 unstyled'></div>");
      $(".container1").append("<div class='circle2 unstyled'></div>");
      style();
    }

  });
});
