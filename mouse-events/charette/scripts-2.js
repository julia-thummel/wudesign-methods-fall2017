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
