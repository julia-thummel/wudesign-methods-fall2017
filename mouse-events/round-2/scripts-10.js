// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//    var color = '#F';
//   for (var i = 0; i < 5; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//    return color;
//   };





$("button").click(function() {
  for(i=0; i<1000; i++) {
  $( ".bar" ).each(function() {
    $(this).animate({height: Math.floor(Math.random() * 500)});
    $(this).css("background-color", randomColor({hue: 'blue'}));
  })
  }
});
