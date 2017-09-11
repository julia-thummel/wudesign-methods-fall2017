$(function() {
  $("#random_width").click(function() {
    $(".square").each(function(index) {
      $(this).css({width:Math.random()*1000}).fadeOut();
      $(this).css({height:Math.random()*1000}).fadeIn();
    });
  });
});


// $(function() {
//   $("#random_color") function() {
//     $(".square").each(function(index) {
//       var colorR = Math.floor((Math.random() * 256));
//       var colorG = Math.floor((Math.random() * 256));
//       var colorB = Math.floor((Math.random() * 256));
//       $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
//     });
//   });
// };
