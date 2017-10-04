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
      $(this).css("left", (Math.random())*1000);
    })

    // if ($(document).scrollTop() > 100) {
    //   $("h1").addClass("serif");
    // }
    // else {
    //   $("h1").removeClass("serif");
    // }

  });
});
