$(document).ready(function(){

  animationOne = document.getElementById("animation-one");
  animationTwo = document.getElementById("animation-two");
  animationThree = document.getElementById("animation-three");
  animationFour = document.getElementById("animation-four");
  animationFive = document.getElementById("animation-five");
  animationSix = document.getElementById("animation-six");
  animationSeven = document.getElementById("animation-seven");
  animationEight = document.getElementById("animation-eight");


  $(window).scroll(function() {
    $(".new").each( function() {
        animationOne.beginElement();
        animationTwo.beginElement();
        animationThree.beginElement();
        animationFour.beginElement();
        animationFive.beginElement();
        animationSix.beginElement();
        animationSeven.beginElement();
        animationEight.beginElement();
      })



    // if ($(document).scrollTop() < 300) {
    //   console.log("hello");
    //   $(".s1").removeClass("new");
    //   // $(".s1").css("display", "inline-flex");
    // }
    // else {
    //   $(".s1").addClass("new");
    //   // $(".s1").css("display", "none");
    // }
    //
    //
    // if ($(document).scrollTop() < 300) {
    //   console.log("hi");
    //   $(".s2").removeClass("new");
    //   // $(".s2").css("display", "inline-flex");
    // }
    // else {
    //   $(".s2").addClass("new");
    //   // $(".s2").css("display", "none");
    // }


  });
});
