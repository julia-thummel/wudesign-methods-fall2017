// $(".circle").mouseover(function(){
//   var opacity = 0;
//    $(this).css("opacity", opacity);
//  });


 // $(function(){
 //   $(".circle").on({
 //       mouseover:function(){
 //          $(this).css({
 //            left:(Math.random()*200)+"px",
 //            top:(Math.random()*200)+"px",
 //             });
 //         }
 //     });
 // });​

 // function move() {
 //   var letters = '0123456789ABCDEF';
 //    var color = '#F';
 //   for (var i = 0; i < 5; i++) {
 //     color += letters[Math.floor(Math.random() * 16)];
 //   }
 //    return color;
 //   };

 function getRandomColor() {
   var letters = '0123456789ABCDEF';
    var color = '#F';
   for (var i = 0; i < 5; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
    return color;
   };

$( ".circle" ).mouseover(function() {
  $(this).css("background-color", getRandomColor({hue: "blue"}));
});



 $( ".circle" ).mouseover(function() {
   $(this).css({left:(Math.random()*400)+"px", top:(Math.random()*400)+"px",});
 });
