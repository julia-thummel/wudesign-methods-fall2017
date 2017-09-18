// function generate() {
//   $( "#hover" ).append( "<p>Test</p>" );
// }



// $(function generate() {
//   $("#hover").mouseover(function() {
//     $(".square").each(function(index) {
//       $(this).css({width:Math.random()*1000});
//     });
//   });
// });



$(".circle").mouseover(function(){
   var opacity = Math.random();
   $(this).css("opacity", opacity);
 });



 function getRandomColor() {
 	 var letters = '0123456789ABCDEF';
    var color = '#F';
 	 for (var i = 0; i < 5; i++) {
 		 color += letters[Math.floor(Math.random() * 16)];
 	 }
 		return color;
 	 };


   $( ".circle" ).mouseover(function() {
     $(this).css("background-color", getRandomColor({hue: 'red'}));
   });
