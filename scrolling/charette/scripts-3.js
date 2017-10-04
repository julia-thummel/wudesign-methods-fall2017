$(document).ready(function(){
  $(window).scroll(function() {

// 1

    if ($(document).scrollTop() > 100) {
      $("h1").addClass("serif");
    }
    else {
      $("h1").removeClass("serif");
    }

// 2

    if ($(document).scrollTop() > 100) {
      $(".container1").append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");
    }
    else {
      $(".container1").remove("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");
    }

// 3

    if ($(document).scrollTop() > 300) {
      $("body").css({"background-color": "#ffc6c6"});
    }
    else {
      $("body").css({"background-color": "#ffffff"});
    }

// 4

    if ($(document).scrollTop() > 300) {
      $("body").css({"margin": "100px"});
    }
    else {
      $("body").css({"margin-top": "100px"});
    }

// 5

    if ($(document).scrollTop() > 500) {
      $(".right").css({"display": "inline-block"});
    }
    else {
      $(".right").css({"display": "none"});
    }

// 6

    if ($(document).scrollTop() > 700) {
      $(".right").css({"position": "fixed"});
    }
    else {
      $(".right").css({"position": "relative"});
    }

// 7

    if ($(document).scrollTop() > 800) {
      $(".container1").append("<h1>yo</h1>");
    }
    else {
      $(".container1").remove("<h1>yo</h1>");
    }


  });
});
