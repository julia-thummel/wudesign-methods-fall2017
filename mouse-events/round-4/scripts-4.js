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
    setTimeout(function() {
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
      })}, 700);
  });





$(".bubble").mousedown(function () {
  setTimeout(function() {
    dialog.prompt({
      title: "create something",
      message: "choose circle or square",
      button: "Submit",
      required: true,
      input: {
        placeholder: "circle, square"
      },
      callback: function(value1){
        if( $.trim(value1) === "" ){
          return false;
        }
        if(value1 === "circle") {
          $(".tab").css("border-radius", "100%");
        }
        if(value1 === "square") {
          $(".tab").css("border-radius", "0%");
        }
        console.log(value1);
      }
    })
    dialog.prompt({
      title: "create something",
      message: "pick a letter a, b, c, d, e, or f",
      button: "Submit",
      required: true,
      input: {
        placeholder: "a, b, c, d, e, or f"
      },
      callback: function(value2){
        if( $.trim(value2) === "" ){
          return false;
        }
        if(value2 === "a") {
          // function getNewColor() {
          // 	 var lett = '0123456789ABCDEF';
          //    var col = '#A';
          // 	 for (var i = 0; i < 5; i++) {
          // 		 col += lett[Math.floor(Math.random() * 16)];
          // 	 }
          // 		return col;
          // 	 };
          //    $( ".tab" ).mouseover(function() {
          //      $(this).css("background-color", getNewColor());
          //    });
          $(".tab").css("background-color", "red");
        }
        if(value2 === "b") {
          // function getNewColor() {
          // 	 var lett = '0123456789ABCDEF';
          //    var col = '#B';
          // 	 for (var i = 0; i < 5; i++) {
          // 		 col += lett[Math.floor(Math.random() * 16)];
          // 	 }
          // 		return col;
          // 	 };
          //    $( ".tab" ).mouseover(function() {
          //      $(this).css("background-color", getNewColor());
          //    });
          $(".tab").css("background-color", "orange");
        }
        if(value2 === "c") {
          // function getNewColor() {
          // 	 var lett = '0123456789ABCDEF';
          //    var col = '#C';
          // 	 for (var i = 0; i < 5; i++) {
          // 		 col += lett[Math.floor(Math.random() * 16)];
          // 	 }
          // 		return col;
          // 	 };
          //    $( ".tab" ).mouseover(function() {
          //      $(this).css("background-color", getNewColor());
          //    });
          $(".tab").css("background-color", "yellow");
        }
        if(value2 === "d") {
          // function getNewColor() {
          // 	 var lett = '0123456789ABCDEF';
          //    var col = '#D';
          // 	 for (var i = 0; i < 5; i++) {
          // 		 col += lett[Math.floor(Math.random() * 16)];
          // 	 }
          // 		return col;
          // 	 };
          //    $( ".tab" ).mouseover(function() {
          //      $(this).css("background-color", getNewColor());
          //    });
          $(".tab").css("background-color", "green");
        }
        if(value2 === "e") {
          // function getNewColor() {
          // 	 var lett = '0123456789ABCDEF';
          //    var col = '#E';
          // 	 for (var i = 0; i < 5; i++) {
          // 		 col += lett[Math.floor(Math.random() * 16)];
          // 	 }
          // 		return col;
          // 	 };
          //    $( ".tab" ).mouseover(function() {
          //      $(this).css("background-color", getNewColor());
          //    });
          $(".tab").css("background-color", "blue");
        }
        if(value2 === "f") {
          // function getNewColor() {
          // 	 var lett = '0123456789ABCDEF';
          //    var col = '#F';
          // 	 for (var i = 0; i < 5; i++) {
          // 		 col += lett[Math.floor(Math.random() * 16)];
          // 	 }
          // 		return col;
          // 	 };
          //    $( ".tab" ).mouseover(function() {
          //      $(this).css("background-color", getNewColor());
          //    });
          $(".tab").css("background-color", "purple");
        }
        console.log(value2);
      }
    })
    dialog.confirm({
      title: "see my creation",
      message: "are you ready?",
      button: "yes!",
      cancel: "start over",
      required: true,
      callback: function(value){
        console.log(value);
        if (value = true) {
          $(".tab").css("display", "inline-flex");
        }
      }
    });

  }, 2500)
});


$( ".tab" ).mouseover(function() {
  // $(this).css("background-color", getNewColor());
  var size = Math.floor(20+Math.random()*400);
  $(this).css("height",size);
  $(this).css("width",size);
  var opacity = Math.random();
  $(this).css("opacity",opacity);
});

$( function() {
  $( ".tab" ).draggable();
});


  //
  // $(".bubble").on("mousedown", function() {
  //   $(this).css('background', 'white');
  // });

  // $(".bubble").on("mouseup", function() {
  //   $(this).css('background', 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)');
  // });


});
