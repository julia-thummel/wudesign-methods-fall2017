$("button").click(function() {
  for(i=0; i<1000; i++) {
  $( ".bar" ).each(function() {
    $(this).animate({height: Math.floor(Math.random() * 500), backgroundColor: randomColor({hue: 'blue'})});
    // $(this).animate({backgroundColor: randomColor({hue: 'blue'})});
  })
  }
});
