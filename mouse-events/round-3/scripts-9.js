$(document).ready( function() {

  $('#deletesuccess').delay(4000).fadeOut();

  $('#start').hide().delay(4500).fadeIn();

  $(".bubble").on("mousedown", function() {
    $(this).css('background', 'white');
  });

});
