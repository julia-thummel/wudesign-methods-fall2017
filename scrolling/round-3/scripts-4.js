$(document).ready(function(){

  animationAOne = document.getElementById("animation-Aone");
  animationATwo = document.getElementById("animation-Atwo");
  animationAThree = document.getElementById("animation-Athree");

  animationBOne = document.getElementById("animation-Bone");
  animationBTwo = document.getElementById("animation-Btwo");
  animationBThree = document.getElementById("animation-Bthree");
  // $("#shape").css("fill", randomColor({hue: 'blue'}));

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
    }

  }, 50, true);

  window.addEventListener('scroll', myEfficientFn);


  });
