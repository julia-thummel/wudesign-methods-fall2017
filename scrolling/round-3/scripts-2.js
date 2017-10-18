$(document).ready(function(){

  animationOne = document.getElementById("animation-one");
  animationTwo = document.getElementById("animation-two");
  $("#one").css("fill", randomColor({hue: 'blue'}));

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
      if (!$(animationOne).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationOne).addClass("current");
        animationOne.beginElement();
        $("#one").css("fill", randomColor({hue: 'blue'}));
      }
    }
    if ((scrollTop < 1000) && (scrollTop > 500)) {
      console.log("hi")
      if (!$(animationTwo).hasClass("current")) {
        $("animate").removeClass("current");
        $(animationTwo).addClass("current");
        animationTwo.beginElement();
        $("#one").css("fill", randomColor({hue: 'blue'}));
      }
    }

  }, 50, true);

  window.addEventListener('scroll', myEfficientFn);


  });
