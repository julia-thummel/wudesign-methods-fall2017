$(document).ready(function(){

  $("#one").css("fill", randomColor({hue: 'blue'}));
  $("#two").css("fill", randomColor({hue: 'blue'}));
  $("#three").css("fill", randomColor({hue: 'blue'}));
  $("#four").css("fill", randomColor({hue: 'blue'}));
  $("#five").css("fill", randomColor({hue: 'blue'}));
  $("#six").css("fill", randomColor({hue: 'blue'}));
  $("#seven").css("fill", randomColor({hue: 'blue'}));
  $("#eight").css("fill", randomColor({hue: 'blue'}));

  animationOne = document.getElementById("animation-one");
  animationTwo = document.getElementById("animation-two");
  animationThree = document.getElementById("animation-three");
  animationFour = document.getElementById("animation-four");
  animationFive = document.getElementById("animation-five");
  animationSix = document.getElementById("animation-six");
  animationSeven = document.getElementById("animation-seven");
  animationEight = document.getElementById("animation-eight");
  animationNine = document.getElementById("animation-nine");


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
      })


      if ($(document).scrollTop() < 300) {
        console.log("hello");
        animationOne.beginElement();
      }
      else {
        animationOne.endElement();
      }



      if ($(document).scrollTop() > 300) {
        console.log("hello");
        animationTwo.beginElement();
      }
      else {
        animationTwo.endElement();
      }


      // if ($(document).scrollTop() > 600) {
      //   console.log("hello");
      //   animationThree.beginElement();
      // }
      // else {
      //   animationThree.endElement();
      // }

});
});
