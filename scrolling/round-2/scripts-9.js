$(document).ready(function(){

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
	// All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);


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
});
