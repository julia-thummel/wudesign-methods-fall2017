// function named() {}
// var handler = function() {}

    $(document).ready(function(){
        $(".one").click(function(){
          console.log("hello there");
        });

        $(".five").click(function(){
          $(this).toggleClass("selected");
        });

        $(".six").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".textChangeOne").click(function(){
          $(this).toggleClass("selected");
        });

        $(".textChangeTwo").click(function(){
          $(this).toggleClass("selected");
        });

        $(".ten").click(function(){
          $(this).toggleClass("selected");
        });

        $(".eleven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".textChangeThree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirteen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourteen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fifteen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".sixteen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventeen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".eighteen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".nineteen").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twenty").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twentyone").click(function(){
          var x = 5;
          var y = 2;
          var z = x + y;
          document.getElementById("sum").innerHTML = z;
        });

        $(".twentytwo").click(function(){
          document.getElementById("date").innerHTML = Date();
        });

        $(".twentythree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twentyfour").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twentyfive").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twentysix").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twentyseven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".twentyeight").click(function(){
          var x = "good job!";
          document.getElementById("textChange").innerHTML = x;
        });

        $(".twentynine").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirty").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtyone").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtytwo").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtythree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtyfour").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtyfive").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtysix").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtyseven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtyeight").click(function(){
          $(this).toggleClass("selected");
        });

        $(".thirtynine").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourty").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtyone").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtytwo").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtythree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtyfour").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtysix").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtyseven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fourtyeight").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftyone").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftytwo").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftythree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftyfour").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftyfive").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftysix").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftyseven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftyeight").click(function(){
          $(this).toggleClass("selected");
        });

        $(".fiftynine").click(function(){
          $(this).slideUp();
        });

        $(".sixty").click(function(){
          var audio = new Audio('gum.mp3');
          audio.play();
        });

        $(".textOne").click(function(){
          $(this).toggleClass("selected");
        });

        $(".textTwo").click(function(){
          $(this).toggleClass("selected");
        });

        $(".textThree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".textFour").click(function(){
          $(this).toggleClass("selected");
        });

        $(".sixtyeight").click(function(){
          $(this).toggleClass("selected");
        });

        $(".sixtynine").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventy").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventyone").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventytwo").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventythree").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventyfour").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventyfive").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventysix").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventyseven").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventyeight").click(function(){
          $(this).toggleClass("selected");
        });

        $(".seventynine").click(function(){
          $(this).toggleClass("selected");
        });

    });


    function oneFunction() {
      alert("hello there");
    }

    function twoFunction() {
    var txt;
    if (confirm("Press a button!") == true) {
        txt = ":)";
    } else {
        txt = ":(";
    }
    document.getElementById("reaction").innerHTML = txt;
}


  function threeFunction() {
      var txt;
      var person = prompt("Please enter your name:", "Abe");
      if (person == null || person == "") {
          txt = "User cancelled the prompt.";
      } else {
          txt = "Hello " + person + "!";
      }
      document.getElementById("greeting").innerHTML = txt;
  }


  function fourFunction() {
      document.getElementById("newButton").classList.toggle("show");
  }


  function fiveFunction() {
    document.getElementById("newButton").style.color = "red";
    document.getElementById("newButton").classList.toggle("show");
  }

  function sixFunction() {
    document.getElementById("gif").style.display = "none";
    document.getElementById("gif").classList.toggle("appear");
  }

  function sevenFunction() {
    document.getElementById("gif2").style.display = "none";
    document.getElementById("gif2").classList.toggle("appear");
  }
