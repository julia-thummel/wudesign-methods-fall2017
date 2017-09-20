$(".rain").click(function() {
  console.log("rain");
  for(i=0; i<1000; i++) {
  $( ".bar1" ).each(function() {
    $(this).animate({height: Math.floor(Math.random() * 500), backgroundColor: randomColor({hue: 'blue'})});
    // $(this).animate({backgroundColor: randomColor({hue: 'blue'})});
  })
  }
});

$(".music").click(function() {
  console.log("rain");
  for(i=0; i<1000; i++) {
  $( ".bar2" ).each(function() {
    $(this).animate({height: Math.floor(Math.random() * 500), backgroundColor: randomColor({hue: 'red'})});
    // $(this).animate({backgroundColor: randomColor({hue: 'blue'})});
  })
  }
});
