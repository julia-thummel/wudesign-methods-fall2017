$(document).ready(function(){

  var position = (Math.random())*1000;

  $(".square").each( function() {
    var size = (Math.random())*500;
    $(this).css("background-color", randomColor({hue: 'yellow'}));
    $(this).css("top", position);
    $(this).css("width", size);
    $(this).css("height", size/2);
  })


$(window).scroll(function() {

     $(".one").css("top" , -($(this).scrollTop()/2) + position +"px");
     $(".two").css("top" , -($(this).scrollTop()/4) + position +"px");
     $(".three").css("top" , -($(this).scrollTop()/6) + position +"px");
     $(".four").css("top" , -($(this).scrollTop()*2) + position +"px");
     $(".five").css("top" , -($(this).scrollTop()*4) + position +"px");
     $(".six").css("top" , -($(this).scrollTop()*6) + position +"px");
     $(".seven").css("top" , -($(this).scrollTop()*8) + position +"px");

// 1
    // $(".square").each( function() {
    //   var size = (Math.random())*200;
    //   $(this).css("background-color", randomColor({hue: 'yellow'}));
    //   $(this).animate({left: (Math.random())*1200}, {duration: 500, queue: false});
    //   $(this).animate({top: (Math.random())*600}, {duration: 500, queue: false});
    //   $(this).animate({width: size}, {duration: 500, queue: false});
    //   $(this).animate({height: size}, {duration: 500, queue: false});
    // })


    // if ($(document).scrollTop() > 100) {
    //   $(".container1").append("<div class='square one'></div>");
    // }
    // else {
    //   $(".container1").remove("<div class='square'></div>");
    // }

  });
});
