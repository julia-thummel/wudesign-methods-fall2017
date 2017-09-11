$(function() {
  $("#navigation").hover(function() {
    $(".icon").each(function(index) {
      $(this).css({'marginLeft':'-2px'});
    });
  });
  $("#navigation").mouseleave(function() {
    $(".icon").each(function(index) {
      $(this).css({'marginLeft':'-85px'});
    });
  });
});
