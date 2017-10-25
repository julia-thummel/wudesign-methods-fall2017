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


  $(".circle").each(function(){
    var size = Math.random()*100
    $(this).css("background-color", randomColor({hue: 'blue'}));
    $(this).css("width", size);
    $(this).css("height", size);
  });

  $(".speed").each(function(){
    $(this).css("background-color", randomColor({hue: 'blue'}));
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

    if ((scrollTop < 1000) && (scrollTop > 300))  {
      console.log("hello")

      if (!$(animationAOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        animationAOne.beginElement();
      }
      if (!$(animationBOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        $(animationBOne).addClass("current");
        animationBOne.beginElement();
      }
      if (!$(animationCOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        $(animationBOne).addClass("current");
        $(animationCOne).addClass("current");
        animationCOne.beginElement();
      }
      if (!$(animationDOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAOne).addClass("current");
        $(animationBOne).addClass("current");
        $(animationCOne).addClass("current");
        $(animationDOne).addClass("current");
        animationDOne.beginElement();
      }
    }

    if ((scrollTop < 2000) && (scrollTop > 1500)) {
      console.log("hi")
      if (!$(animationATwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        animationATwo.beginElement();
      }
      if (!$(animationBTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        $(animationBTwo).addClass("current");
        animationBTwo.beginElement();
      }
      if (!$(animationCTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        $(animationBTwo).addClass("current");
        $(animationCTwo).addClass("current");
        animationCTwo.beginElement();
      }
      if (!$(animationDTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationATwo).addClass("current");
        $(animationBTwo).addClass("current");
        $(animationCTwo).addClass("current");
        $(animationDTwo).addClass("current");
        animationDTwo.beginElement();
      }
    }

    if ((scrollTop < 2500) && (scrollTop > 2000)) {
      console.log("hey")
      if (!$(animationAThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        animationAThree.beginElement();
      }
      if (!$(animationBThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        $(animationBThree).addClass("current");
        animationBThree.beginElement();
      }
      if (!$(animationCThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        $(animationBThree).addClass("current");
        $(animationCThree).addClass("current");
        animationCThree.beginElement();
      }
      if (!$(animationDThree).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAThree).addClass("current");
        $(animationBThree).addClass("current");
        $(animationCThree).addClass("current");
        $(animationDThree).addClass("current");
        animationDThree.beginElement();
      }
    }

    if ((scrollTop < 3000) && (scrollTop > 2500)) {
      console.log("heya")
      if (!$(animationAFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        animationAFour.beginElement();
      }
      if (!$(animationBFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        $(animationBFour).addClass("current");
        animationBFour.beginElement();
      }
      if (!$(animationCFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        $(animationBFour).addClass("current");
        $(animationCFour).addClass("current");
        animationCFour.beginElement();
      }
      if (!$(animationDFour).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFour).addClass("current");
        $(animationBFour).addClass("current");
        $(animationCFour).addClass("current");
        $(animationDFour).addClass("current");
        animationDFour.beginElement();
      }
    }

    if ((scrollTop < 3500) && (scrollTop > 3000)) {
      console.log("heyyyyy")
      if (!$(animationAFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        animationAFive.beginElement();
      }
      if (!$(animationBFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        $(animationBFive).addClass("current");
        animationBFive.beginElement();
      }
      if (!$(animationCFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        $(animationBFive).addClass("current");
        $(animationCFive).addClass("current");
        animationCFive.beginElement();
      }
      if (!$(animationDFive).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationAFive).addClass("current");
        $(animationBFive).addClass("current");
        $(animationCFive).addClass("current");
        $(animationDFive).addClass("current");
        animationDFive.beginElement();
      }
    }
  }, 50, true);

  window.addEventListener('scroll', myEfficientFn);


  });
