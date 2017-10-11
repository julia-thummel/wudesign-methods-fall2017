$(document).ready( function() {
  $(".circle").each( function() {
    $(this).css("background-color", randomColor({hue: 'blue'}));
  });
});
