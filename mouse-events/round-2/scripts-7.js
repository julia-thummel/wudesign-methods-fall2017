// $( ".container" ).append( "<div class="divOne"></div><div class="divOne"></div>" );
//
// $( ".divOne" ).append( "<div class="divOne"></div><div class="divOne"></div>" );
//

$( ".container" ).click(function() {
  $(".container").append( "<div class="divOne"></div><div class="divOne"></div>" );
});

$( ".divOne" ).click(function() {
  $(".divOne").append( "<div class="divTwo"></div><div class="divTwo"></div>" );
});
