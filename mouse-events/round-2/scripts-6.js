$(".card1").flip({
  axis: 'y',
  trigger: 'hover'
});

$(".card2").flip({
  axis: 'x',
  trigger: 'hover'
});


 function getRandomColor() {
   var letters = '0123456789ABCDEF';
    var color = '#F';
   for (var i = 0; i < 5; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
    return color;
   };


   $( ".card1" ).mouseover(function() {
     $(this).css("background-color", getRandomColor({hue: 'light blue'}));
   });

   $( ".card2" ).mouseover(function() {
     $(this).css("background-color", getRandomColor({hue: 'light blue'}));
   });
