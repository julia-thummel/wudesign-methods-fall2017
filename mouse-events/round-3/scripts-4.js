$(".card1").flip({
  axis: 'y',
  trigger: 'manual'
});

$(".card2").flip({
  axis: 'x',
  trigger: 'manual'
});

$("body").on("click", function () {
  setInterval(function(){
  $(".card:not(.flipped)").first().flip(true)
  $(".card:not(.flipped)").first().addClass("flipped")
}, 3);
  $(".back").each(function() {
    $(this).css("background-color", getRandomColor({hue: 'light blue'}));
  })
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
