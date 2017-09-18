function getRandomColor() {
	 var letters = '0123456789ABCDEF';
   var color = '#F';
	 for (var i = 0; i < 5; i++) {
		 color += letters[Math.floor(Math.random() * 16)];
	 }
		return color;
	 };


$( function() {
  $( ".box" ).draggable();
});


$( ".box" ).click(function() {
    $(".container").append( '<div class="box"></div>' );
$( ".box" ).each(function() {
  var position = Math.floor(20+Math.random()*400);
  $(this).css("top",position);
  $(this).css("left",position);
  $(this).css("background-color", getRandomColor());
  $( ".box" ).draggable();
})});
