$(document).ready(function(){

  animationOne = document.getElementById("animation-one");
  animationTwo = document.getElementById("animation-two");


  $(window).scroll(function() {
    $(".new").each( function() {
        animationOne.beginElement();
        animationTwo.beginElement();
      })


  if ($(document).scrollTop() < 300) {
    console.log("hello");
    $(".s1").removeClass("new");
    $(".s1").css("display", "inline-flex");
  }
  else {
    $(".s1").addClass("new");
    $(".s1").css("display", "none");
  }


  if ($(document).scrollTop() > 300) {
    console.log("hi");
    $(".s2").removeClass("new");
    $(".s2").css("display", "inline-flex");
  }
  else {
    $(".s2").addClass("new");
    $(".s2").css("display", "none");
  }


  // $(window).scroll(function() {
  //
  //
  //   if ($(document).scrollTop() > 100) {
  //     console.log("hello");
  //     $(".morph").removeClass("new");
  //     animationOne.beginElement();
  //   }
  //   else {
  //     $(".morph").addClass("new");
  //   }

});
});
