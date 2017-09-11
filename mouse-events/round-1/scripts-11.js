function getRandomColor() {
	 var letters = '0123456789ABCDEF';
   var color = '#F';
	 for (var i = 0; i < 5; i++) {
		 color += letters[Math.floor(Math.random() * 16)];
	 }
		return color;
	 };



$( ".tab" ).mouseover(function() {
  $(this).css("background-color", getRandomColor());
});



$(".tab").mouseover(function(){
		var size = Math.floor(20+Math.random()*400);
		$(this).css("height",size);
    $(this).css("width",size);
	});


$(".tab").mouseover(function(){
		var opacity = Math.random();
		$(this).css("opacity",opacity);
	});





$( function() {
  $( ".tab" ).draggable();
});
