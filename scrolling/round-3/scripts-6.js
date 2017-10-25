$(document).ready(function(){

  animationAOne = document.getElementById("animation-Aone");
  animationATwo = document.getElementById("animation-Atwo");
  animationAThree = document.getElementById("animation-Athree");

  animationBOne = document.getElementById("animation-Bone");
  animationBTwo = document.getElementById("animation-Btwo");
  animationBThree = document.getElementById("animation-Bthree");

  animationCOne = document.getElementById("animation-Cone");
  animationCTwo = document.getElementById("animation-Ctwo");
  animationCThree = document.getElementById("animation-Cthree");

  animationDOne = document.getElementById("animation-Done");
  animationDTwo = document.getElementById("animation-Dtwo");
  animationDThree = document.getElementById("animation-Dthree");


  $(".circle").each(function(){
    var size = Math.random()*100
    $(this).css("background-color", randomColor({hue: 'blue'}));
    $(this).css("left", Math.random()*1300);
    $(this).css("top", Math.random()*600);
    $(this).css("width", size);
    $(this).css("height", size);
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

    if ((scrollTop < 500) && (scrollTop > 0))  {
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

    if ((scrollTop < 1000) && (scrollTop > 500)) {
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

    if ((scrollTop < 1500) && (scrollTop > 1000)) {
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
  }, 50, true);

  window.addEventListener('scroll', myEfficientFn);


  });
