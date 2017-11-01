$(document).ready(function(){

  animationAOne = document.getElementById("animation-Aone");
  animationATwo = document.getElementById("animation-Atwo");
  animationAThree = document.getElementById("animation-Athree");
  animationAFour = document.getElementById("animation-Afour");
  animationAFive = document.getElementById("animation-Afive");

  animationBOne = document.getElementById("animation-Bone");
  animationBTwo = document.getElementById("animation-Btwo");
  animationBThree = document.getElementById("animation-Bthree");
  animationBFour = document.getElementById("animation-Bfour");
  animationBFive = document.getElementById("animation-Bfive");

  animationCOne = document.getElementById("animation-Cone");
  animationCTwo = document.getElementById("animation-Ctwo");
  animationCThree = document.getElementById("animation-Cthree");
  animationCFour = document.getElementById("animation-Cfour");
  animationCFive = document.getElementById("animation-Cfive");

  animationDOne = document.getElementById("animation-Done");
  animationDTwo = document.getElementById("animation-Dtwo");
  animationDThree = document.getElementById("animation-Dthree");
  animationDFour = document.getElementById("animation-Dfour");
  animationDFive = document.getElementById("animation-Dfive");




  animation2AOne = document.getElementById("animation-2Aone");
  animation2ATwo = document.getElementById("animation-2Atwo");
  animation2AThree = document.getElementById("animation-2Athree");
  animation2AFour = document.getElementById("animation-2Afour");
  animation2AFive = document.getElementById("animation-2Afive");

  animation2BOne = document.getElementById("animation-2Bone");
  animation2BTwo = document.getElementById("animation-2Btwo");
  animation2BThree = document.getElementById("animation-2Bthree");
  animation2BFour = document.getElementById("animation-2Bfour");
  animation2BFive = document.getElementById("animation-2Bfive");

  animation2COne = document.getElementById("animation-2Cone");
  animation2CTwo = document.getElementById("animation-2Ctwo");
  animation2CThree = document.getElementById("animation-2Cthree");
  animation2CFour = document.getElementById("animation-2Cfour");
  animation2CFive = document.getElementById("animation-2Cfive");

  animation2DOne = document.getElementById("animation-2Done");
  animation2DTwo = document.getElementById("animation-2Dtwo");
  animation2DThree = document.getElementById("animation-2Dthree");
  animation2DFour = document.getElementById("animation-2Dfour");
  animation2DFive = document.getElementById("animation-2Dfive");


  $(".circleA").each(function(){
    var size = Math.random()*100
    $(this).css("background-color", randomColor({hue: 'blue'}));
    $(this).css("width", size);
    $(this).css("height", size);
  });

  $(".circleB").each(function(){
    var size = Math.random()*100
    $(this).css("background-color", randomColor({hue: 'blue'}));
    $(this).css("width", size);
    $(this).css("height", size);
  });

  $(".speed1").each(function(){
    $(this).css("background-color", randomColor({hue: 'blue'}));
    $(this).css("left", Math.random()*1300);
    $(this).css("top", Math.random()*600);
  });

  $(".speed2").each(function(){
    $(this).css("left", Math.random()*1300);
    $(this).css("top", Math.random()*600);
  });

  $(".bounce").each(function(){
    $(this).css("left", Math.random()*1300);
    $(this).css("top", Math.random()*600);
  });



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
    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);

    $(".bounce").each(function(){
      $(this).animate({left: Math.random()*1300}, {easing: "swing", queue: false, duration: 800});
      $(this).animate({top: Math.random()*600}, {easing: "swing", queue: false, duration: 800});
    });

    if ((scrollTop < 2500) && (scrollTop > 2000))  {
      console.log("hello")

      if (!$(animationAOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        animationAOne.beginElement();
      }
        if (!$(animation2AOne).hasClass("current")) {
            $("animate").removeClass("current");
            $(animationAOne).addClass("current");
            $(animation2AOne).addClass("current");
            animation2AOne.beginElement();
        }

      if (!$(animationBOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        $(animationBOne).addClass("current");
        animationBOne.beginElement();
      }
        if (!$(animation2BOne).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAOne).addClass("current");
          $(animationBOne).addClass("current");
          $(animation2AOne).addClass("current");
          $(animation2BOne).addClass("current");
          animation2BOne.beginElement();
        }

      if (!$(animationCOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        $(animationBOne).addClass("current");
        $(animationCOne).addClass("current");
        animationCOne.beginElement();
      }
        if (!$(animation2COne).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAOne).addClass("current");
          $(animationBOne).addClass("current");
          $(animationCOne).addClass("current");
          $(animation2AOne).addClass("current");
          $(animation2BOne).addClass("current");
          $(animation2COne).addClass("current");
          animation2COne.beginElement();
        }

      if (!$(animationDOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        $(animationBOne).addClass("current");
        $(animationCOne).addClass("current");
        $(animationDOne).addClass("current");
        animationDOne.beginElement();
      }
        if (!$(animation2DOne).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAOne).addClass("current");
          $(animationBOne).addClass("current");
          $(animationCOne).addClass("current");
          $(animationDOne).addClass("current");
          $(animation2AOne).addClass("current");
          $(animation2BOne).addClass("current");
          $(animation2COne).addClass("current");
          $(animation2DOne).addClass("current");
          animation2DOne.beginElement();
        }
    }



    if ((scrollTop < 3000) && (scrollTop > 2500)) {
      console.log("hi")

      if (!$(animationATwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        animationATwo.beginElement();
      }
        if (!$(animation2ATwo).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationATwo).addClass("current");
          $(animation2ATwo).addClass("current");
          animation2ATwo.beginElement();
        }

      if (!$(animationBTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        $(animationBTwo).addClass("current");
        animationBTwo.beginElement();
      }
        if (!$(animation2BTwo).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationATwo).addClass("current");
          $(animationBTwo).addClass("current");
          $(animation2ATwo).addClass("current");
          $(animation2BTwo).addClass("current");
          animation2BTwo.beginElement();
        }

      if (!$(animationCTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        $(animationBTwo).addClass("current");
        $(animationCTwo).addClass("current");
        animationCTwo.beginElement();
      }
        if (!$(animation2CTwo).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationATwo).addClass("current");
          $(animationBTwo).addClass("current");
          $(animationCTwo).addClass("current");
          $(animation2ATwo).addClass("current");
          $(animation2BTwo).addClass("current");
          $(animation2CTwo).addClass("current");
          animation2CTwo.beginElement();
        }

      if (!$(animationDTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        $(animationBTwo).addClass("current");
        $(animationCTwo).addClass("current");
        $(animationDTwo).addClass("current");
        animationDTwo.beginElement();
      }
        if (!$(animation2DTwo).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationATwo).addClass("current");
          $(animationBTwo).addClass("current");
          $(animationCTwo).addClass("current");
          $(animationDTwo).addClass("current");
          $(animation2ATwo).addClass("current");
          $(animation2BTwo).addClass("current");
          $(animation2CTwo).addClass("current");
          $(animation2DTwo).addClass("current");
          animation2DTwo.beginElement();
        }
    }

    if ((scrollTop < 3500) && (scrollTop > 3000)) {
      console.log("hey")

      if (!$(animationAThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        animationAThree.beginElement();
      }
        if (!$(animation2AThree).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAThree).addClass("current");
          $(animation2AThree).addClass("current");
          animation2AThree.beginElement();
        }

      if (!$(animationBThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        $(animationBThree).addClass("current");
        animationBThree.beginElement();
      }
        if (!$(animation2BThree).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAThree).addClass("current");
          $(animationBThree).addClass("current");
          $(animation2AThree).addClass("current");
          $(animation2BThree).addClass("current");
          animation2BThree.beginElement();
        }

      if (!$(animationCThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        $(animationBThree).addClass("current");
        $(animationCThree).addClass("current");
        animationCThree.beginElement();
      }
        if (!$(animation2CThree).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAThree).addClass("current");
          $(animationBThree).addClass("current");
          $(animationCThree).addClass("current");
          $(animation2AThree).addClass("current");
          $(animation2BThree).addClass("current");
          $(animation2CThree).addClass("current");
          animation2CThree.beginElement();
        }

      if (!$(animationDThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        $(animationBThree).addClass("current");
        $(animationCThree).addClass("current");
        $(animationDThree).addClass("current");
        animationDThree.beginElement();
      }
        if (!$(animation2DThree).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAThree).addClass("current");
          $(animationBThree).addClass("current");
          $(animationCThree).addClass("current");
          $(animationDThree).addClass("current");
          $(animation2AThree).addClass("current");
          $(animation2BThree).addClass("current");
          $(animation2CThree).addClass("current");
          $(animation2DThree).addClass("current");
          animation2DThree.beginElement();
        }
    }

    if ((scrollTop < 4000) && (scrollTop > 3500)) {
      console.log("heya")

      if (!$(animationAFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        animationAFour.beginElement();
      }
        if (!$(animation2AFour).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFour).addClass("current");
          $(animation2AFour).addClass("current");
          animation2AFour.beginElement();
        }

      if (!$(animationBFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        $(animationBFour).addClass("current");
        animationBFour.beginElement();
      }
        if (!$(animation2BFour).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFour).addClass("current");
          $(animationBFour).addClass("current");
          $(animation2AFour).addClass("current");
          $(animation2BFour).addClass("current");
          animation2BFour.beginElement();
        }

      if (!$(animationCFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        $(animationBFour).addClass("current");
        $(animationCFour).addClass("current");
        animationCFour.beginElement();
      }
        if (!$(animation2CFour).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFour).addClass("current");
          $(animationBFour).addClass("current");
          $(animationCFour).addClass("current");
          $(animation2AFour).addClass("current");
          $(animation2BFour).addClass("current");
          $(animation2CFour).addClass("current");
          animation2CFour.beginElement();
        }

      if (!$(animationDFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        $(animationBFour).addClass("current");
        $(animationCFour).addClass("current");
        $(animationDFour).addClass("current");
        animationDFour.beginElement();
      }
        if (!$(animation2DFour).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFour).addClass("current");
          $(animationBFour).addClass("current");
          $(animationCFour).addClass("current");
          $(animationDFour).addClass("current");
          $(animation2AFour).addClass("current");
          $(animation2BFour).addClass("current");
          $(animation2CFour).addClass("current");
          $(animation2DFour).addClass("current");
          animation2DFour.beginElement();
        }
    }


    if ((scrollTop < 4500) && (scrollTop > 4000)) {
      console.log("heyyyyy")

      if (!$(animationAFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        animationAFive.beginElement();
      }
        if (!$(animation2AFive).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFive).addClass("current");
          $(animation2AFive).addClass("current");
          animation2AFive.beginElement();
        }

      if (!$(animationBFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        $(animationBFive).addClass("current");
        animationBFive.beginElement();
      }
        if (!$(animation2BFive).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFive).addClass("current");
          $(animationBFive).addClass("current");
          $(animation2AFive).addClass("current");
          $(animation2BFive).addClass("current");
          animation2BFive.beginElement();
        }

      if (!$(animationCFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        $(animationBFive).addClass("current");
        $(animationCFive).addClass("current");
        animationCFive.beginElement();
      }
        if (!$(animation2CFive).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFive).addClass("current");
          $(animationBFive).addClass("current");
          $(animationCFive).addClass("current");
          $(animation2AFive).addClass("current");
          $(animation2BFive).addClass("current");
          $(animation2CFive).addClass("current");
          animation2CFive.beginElement();
        }

      if (!$(animationDFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        $(animationBFive).addClass("current");
        $(animationCFive).addClass("current");
        $(animationDFive).addClass("current");
        animationDFive.beginElement();
      }
        if (!$(animation2DFive).hasClass("current")) {
          $("animate").removeClass("current");
          $(animationAFive).addClass("current");
          $(animationBFive).addClass("current");
          $(animationCFive).addClass("current");
          $(animationDFive).addClass("current");
          $(animation2AFive).addClass("current");
          $(animation2BFive).addClass("current");
          $(animation2CFive).addClass("current");
          $(animation2DFive).addClass("current");
          animation2DFive.beginElement();
        }
    }
  }, 100, true);

  window.addEventListener('scroll', myEfficientFn);


});
