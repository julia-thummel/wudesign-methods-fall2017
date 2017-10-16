animationOne = document.getElementById("animation-one");
animationTwo = document.getElementById("animation-two");
animationThree = document.getElementById("animation-three");
animationFour = document.getElementById("animation-four");
animationFive = document.getElementById("animation-five");
animationSix = document.getElementById("animation-six");
animationSeven = document.getElementById("animation-seven");
animationEight = document.getElementById("animation-eight");
animationNine = document.getElementById("animation-nine");
animationTen = document.getElementById("animation-ten");

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
      animationNine.beginElement();
      animationTen.beginElement();
    })
});
