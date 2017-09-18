$(".circle").mouseover(function(){
  var currentOpacity = $(this).css("opacity");
  var opacity = Math.random() * .7;
  var newOpacity = currentOpacity + opacity;
   $(this).css("opacity", newOpacity);

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
     var hoverCount = $(this).data("hoverCount");
     if (hoverCount === undefined) {
       hoverCount = 0;
      }
      if (hoverCount < 3) {
     $(this).css("background-color", getRandomColor({hue: 'red'}));
     $(this).data("hoverCount", hoverCount++);
      }
      else {
        $(this).css("background-color", "#ff784f");
      }
   });
