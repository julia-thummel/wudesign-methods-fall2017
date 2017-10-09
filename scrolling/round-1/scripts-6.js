$(document).ready(function(){

  var position = (Math.random())*1000;

function style() {
  $(".unstyled").each( function() {
    var size = (Math.random())*500;
    $(this).css("left", (Math.random())*1000);
    $(this).css("background-color", randomColor({hue: 'yellow'}));
    $(this).css("top", position);
    $(this).css("width", size);
    $(this).css("height", size/2);
    $(this).data("scrollSpeed", (Math.random())*6);
    $(this).removeClass("unstyled");
  })
};

style();

$(window).scroll(function() {

  $(".square").each( function() {
    var speed = $(this).data("scrollSpeed");
    var pos = -($(window).scrollTop()*(speed));
     $(this).css("top" , pos + position + "px");
     console.log(speed, pos);
  });

    //  $(".two").css("top" , -($(this).scrollTop()/4) + position +"px");
    //  $(".three").css("top" , -($(this).scrollTop()/6) + position +"px");
    //  $(".four").css("top" , -($(this).scrollTop()*2) + position +"px");
    //  $(".five").css("top" , -($(this).scrollTop()*4) + position +"px");
    //  $(".six").css("top" , -($(this).scrollTop()*6) + position +"px");
    //  $(".seven").css("top" , -($(this).scrollTop()*8) + position +"px");

// 1
    // $(".square").each( function() {
    //   var size = (Math.random())*200;
    //   $(this).css("background-color", randomColor({hue: 'yellow'}));
    //   $(this).animate({left: (Math.random())*1200}, {duration: 500, queue: false});
    //   $(this).animate({top: (Math.random())*600}, {duration: 500, queue: false});
    //   $(this).animate({width: size}, {duration: 500, queue: false});
    //   $(this).animate({height: size}, {duration: 500, queue: false});
    // })

console.log("hello")

    if ($(document).scrollTop() > 100) {
      $(".container1").append("<div class='square one unstyled'></div>");
      style();
    }


    // else {
    //   $(".container1").remove(".square .one");
    // }

  });
});
