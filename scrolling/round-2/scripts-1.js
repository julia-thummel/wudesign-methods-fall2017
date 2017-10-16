$(document).ready(function(){

  $(".square").each( function() {
    $(this).css("background-color", randomColor({hue: 'blue'}));
  })
});
