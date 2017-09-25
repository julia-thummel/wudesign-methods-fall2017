$(document).ready( function() {

  $('#deletesuccess').delay(4000).fadeOut();

  $('#start').hide().delay(4500).fadeIn();

  $('#start').mousedown( function() {
    $('#start').delay(500).fadeOut();
  });


  function getRandomColor() {
  	 var letters = '0123456789ABCDEF';
     var color = '#';
  	 for (var i = 0; i < 6; i++) {
  		 color += letters[Math.floor(Math.random() * 16)];
  	 }
  		return color;
  	 };


  $(".card1").flip({
    axis: 'y',
    trigger: 'manual'
  });

  $(".card2").flip({
    axis: 'x',
    trigger: 'manual'
  });

  $(".bubble").mousedown(function () {
    setTimeout(function(){
      setInterval(function(){
      $(".card:not(.flipped)").first().flip(true)
      $(".card:not(.flipped)").first().addClass("flipped")
    }, 3);
      $(".back").each(function() {
        $(this).css("background-color", getRandomColor());
      });
      $(".card").each(function() {
        $(".card1").delay(1000).animate({top: "-100%"}, 1000, "swing");
        $(".card2").delay(1000).animate({top: "100%"}, 1000, "swing");
      });
    }).delay(1000);
  });

  //
  // $(".bubble").on("mousedown", function() {
  //   $(this).css('background', 'white');
  // });

  // $(".bubble").on("mouseup", function() {
  //   $(this).css('background', 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)');
  // });


});
