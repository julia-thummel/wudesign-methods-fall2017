$(document).ready(function(){

  animationOne = document.getElementById("animation-one");
  animationTwo = document.getElementById("animation-two");
  animationThree = document.getElementById("animation-three");
  animationFour = document.getElementById("animation-four");
  animationFive = document.getElementById("animation-five");
  animationSix = document.getElementById("animation-six");
  animationSeven = document.getElementById("animation-seven");
  animationEight = document.getElementById("animation-eight");


  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var myEfficientFn = debounce(function() {
  $(".new").each( function() {
      animationOne.beginElement();
      animationTwo.beginElement();
      animationThree.beginElement();
      animationFour.beginElement();
      animationFive.beginElement();
      animationSix.beginElement();
      animationSeven.beginElement();
      animationEight.beginElement();
      // animationNine.beginElement();
      // animationTen.beginElement();
    })

    console.log("hello")

      $("#one").css("fill", randomColor({hue: 'blue'}));
      $("#two").css("fill", randomColor({hue: 'blue'}));
      $("#three").css("fill", randomColor({hue: 'blue'}));
      $("#four").css("fill", randomColor({hue: 'blue'}));
      $("#five").css("fill", randomColor({hue: 'blue'}));
      $("#six").css("fill", randomColor({hue: 'blue'}));
      $("#seven").css("fill", randomColor({hue: 'blue'}));
      $("#eight").css("fill", randomColor({hue: 'blue'}));

  }, 250, true);

  window.addEventListener('scroll', myEfficientFn);



  // $(window).scroll(function() {
    // $(".new").each( function() {
    //     animationOne.beginElement();
    //     animationTwo.beginElement();
    //     animationThree.beginElement();
    //     animationFour.beginElement();
    //     animationFive.beginElement();
    //     animationSix.beginElement();
    //     animationSeven.beginElement();
    //     animationEight.beginElement();
    //   })


    // $("#one").css("fill", randomColor({hue: 'blue'}));
    // $("#two").css("fill", randomColor({hue: 'blue'}));
    // $("#three").css("fill", randomColor({hue: 'blue'}));
    // $("#four").css("fill", randomColor({hue: 'blue'}));
    // $("#five").css("fill", randomColor({hue: 'blue'}));
    // $("#six").css("fill", randomColor({hue: 'blue'}));
    // $("#seven").css("fill", randomColor({hue: 'blue'}));
    // $("#eight").css("fill", randomColor({hue: 'blue'}));

// });
});
