$(document).ready( function() {
  $(".circle").each( function() {
    $(this).css("background-color", randomColor({hue: 'blue'}));
  });


$(window).scroll(function() {

  console.log("hello")
  $(".container1").animate({transform: 'rotate(20deg)'},1000);


  });
});
