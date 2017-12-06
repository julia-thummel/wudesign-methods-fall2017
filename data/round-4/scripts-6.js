$(document).ready(function(){

//hide the content until ready
  $(".d1").hide();
  $(".header").hide();

  $(".d1")
      .delay(3000)
      .queue( function(next){
        $(this).show();
        next();
      });

  $(".header")
      .delay(3000)
      .queue( function(next){
        $(this).show();
        next();
      });


// the intro
  $(".load").delay(1900).animate({display: "none"}, 1900, "swing").fadeOut();
  $(".finished").delay(1500).addClass("animate");
  $(".finished").delay(1550).animate({display : "inline-block"}, 1500, "swing").fadeOut();


  $(".circle").each(function (){
    var coordinates = {"left": Math.random()*1300, "top": Math.random()*1600}
    $(this).css(coordinates);
    $(this).data("coordinates", coordinates)
  });


//little circles move
  function move() {
    $(".circle").each(function (){
      var size = Math.random()*15;
      var coordinates = $(this).data("coordinates")
      $(this).animate({width: size}, {easing: "swing", queue: false, duration: 10000});
      $(this).animate({height: size}, {easing: "swing", queue: false, duration: 10000});
      $(this).animate({left: coordinates.left + Math.random()*50}, {easing: "swing", queue: false, duration: 10000});
      $(this).animate({top: coordinates.top + Math.random()*50}, {easing: "swing", queue: false, duration: 10000});
    });
    window.setTimeout(move, 10000);
  };

  move();




//get date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
  today = mm + '/' + dd
  $(".date").append(today);

  //get time
  var d = new Date(); // for now
  var hours = d.getHours(); // => 9
  var minutes = d.getMinutes();
  if(minutes<10) {
      minutes = '0'+minutes
  }// =>  30
  d = hours + ":" + minutes;
  $(".time").append(d);

//toggle date/time
  $(".time").hide();
  $(".date").click(function(){
    $(".time").show();
    $(".date").hide();
  })

  $(".time").click(function(){
    $(".date").show();
    $(".time").hide();
  })




//scroll button
  $(".arrow").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top
      });
  });




  var dataUrls = [
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22san%20francisco%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22new%20york%2C%20ny%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22phoenix%2C%20az%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22new%20orleans%2C%20la%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22seattle%2C%20wa%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22denver%2C%20co%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22washington%2C%20dc%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  ];

  var dataResults = []

    dataUrls.forEach( function(url){
      jQuery.getJSON(url, function(data) {
        console.log(data);
        dataResults.push(data);
      if (dataResults.length == dataUrls.length) {


        for (i = 0; i < dataResults.length; i++) {
          $.each(dataResults[i], function(i, query){
            var sunrise = query.results.channel.astronomy.sunrise;
            console.log(sunrise);
            var opacity = query.results.channel.atmosphere.visibility / 10;
            var name = $("<h3>" + query.results.channel.location.city + "</h3>");

            var bubble = $("<div class='bubble'></div>");
            name.addClass("text" + " " + i);

            $(".d1").append(bubble);
            bubble.append(name);
            bubble.data("name", name);





            // add icon
            var cityName = query.results.channel.location.city;
            bubble.data("cityName", cityName);
            console.log(cityName);
              var chicago = $("<img src='chi.svg'>");
              var denver = $("<img src='denver.svg'>");
              var ny = $("<img src='ny.svg'>");
              var nola = $("<img src='nola.svg'>");
              var seattle = $("<img src='seattle.svg'>");
              var sanfran = $("<img src='sanfran.svg'>");
              var dc = $("<img src='dc.svg'>");
              var phoenix = $("<img src='phoenix.svg'>");
              var maui = $("<img src='maui.svg'>");

            bubble.addClass(cityName);

            if (cityName = "Chicago") {
              if (!$(".Chicago").hasClass("hasIcon")) {
                $(".Chicago").append(chicago);
                $(".Chicago").addClass("hasIcon");
              }
            }
            if (cityName = "Denver") {
              if (!$(".Denver").hasClass("hasIcon")) {
                $(".Denver").append(denver);
                $(".Denver").addClass("hasIcon");
              }
            }
            if (cityName = "New York") {
              if (!$(".York").hasClass("hasIcon")) {
                $(".York").append(ny);
                $(".York").addClass("hasIcon");
              }
            }
            if (cityName = "New Orleans") {
              if (!$(".Orleans").hasClass("hasIcon")) {
                $(".Orleans").append(nola);
                $(".Orleans").addClass("hasIcon");
              }
            }
            if (cityName = "Seattle") {
              if (!$(".Seattle").hasClass("hasIcon")) {
                $(".Seattle").append(seattle);
                $(".Seattle").addClass("hasIcon");
              }
            }
            if (cityName = "San Francisco") {
              if (!$(".Francisco").hasClass("hasIcon")) {
                $(".Francisco").append(sanfran);
                $(".Francisco").addClass("hasIcon");
              }
            }
            if (cityName = "Washington") {
              if (!$(".Washington").hasClass("hasIcon")) {
                $(".Washington").append(dc);
                $(".Washington").addClass("hasIcon");
              }
            }
            if (cityName = "Phoenix") {
              if (!$(".Phoenix").hasClass("hasIcon")) {
                $(".Phoenix").append(phoenix);
                $(".Phoenix").addClass("hasIcon");
              }
            }
            if (cityName = "Maui") {
              if (!$(".Maui").hasClass("hasIcon")) {
                $(".Maui").append(maui);
                $(".Maui").addClass("hasIcon");
              }
            }





            // determine bubble color
            var r = query.results.channel.wind.chill * 3;
            var g = query.results.channel.wind.speed * 10;
            var b = Math.floor(9500 / query.results.channel.wind.chill);

            var background =  "rgba("+ r +"," + g + "," + b + "," + opacity + ")"
            bubble.css({"background": background});
            bubble.data("background", background);

            var windSpeed = query.results.channel.wind.speed;
            bubble.data("windSpeed", windSpeed);






            // gradient hover colors

            var conditions = [
              "linear-gradient(-45deg, #ccc9c9, #bcbcbc, #826d6d, #595656)",
              "linear-gradient(-45deg, #a7d1bf, #58a6b7, #6d6972, #0c3833)",
              "linear-gradient(-45deg, #a7d1bf, #58a6b7, #6d6972, #0c3833)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)",
              "linear-gradient(-45deg, #43d3e8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #43d3e8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #43d3e8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #43d3e8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #c4dfe6, #66a5ad, #07575b)",
              "linear-gradient(-45deg, #c4dfe6, #66a5ad, #07575b)",
              "linear-gradient(-45deg, #c4dfe6, #66a5ad, #07575b)",
              "linear-gradient(-45deg, #c4dfe6, #66a5ad, #07575b)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #e8edef, #86cce8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #43d3e8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #a43820, #ba5536, #693d3d, #462118)",
              "linear-gradient(-45deg, #efefef, #d3dbe2, #c4c4c4)",
              "linear-gradient(-45deg, #f9deca, #f2dfda)",
              "linear-gradient(-45deg, #f7f7f7, #937c7c, #544545)",
              "linear-gradient(-45deg, #f7f7f7, #666464)",
              "linear-gradient(-45deg, #f7f7f7, #666464)",
              "linear-gradient(-45deg, #e6e8f2, #c6c6c6, #6f9af7)",
              "linear-gradient(-45deg, #d1d3d6, #b7bfcc, #c2cec8, #b8bab9)",
              "linear-gradient(-45deg, #717172, #52525b, #393942)",
              "linear-gradient(-45deg, #d1d3d6, #b7bfcc, #c2cec8, #b8bab9)",
              "linear-gradient(-45deg, #717172, #52525b, #1e1e63)",
              "linear-gradient(-45deg, #c9e4e8, #d1d3d6, #b2e2e8, #b7bfcc)",
              "linear-gradient(-45deg, #0c2a75, #111e3d)",
              "linear-gradient(-45deg, #ffe0a0, #fdffdd, #d3f8ff, #a0edff)",
              "linear-gradient(-45deg, #0c2a75, #111e3d)",
              "linear-gradient(-45deg, #ffe0a0, #fdffdd, #d3f8ff, #a0edff)",
              "linear-gradient(-45deg, #e8edef, #86cce8, #90afc5, #336b87)",
              "linear-gradient(-45deg, #fc9a23, #e84a27, #a43820, #ba5536)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)",
              "linear-gradient(-45deg, #c4dfe6, #66a5ad, #07575b)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #c9e4e8, #d1d3d6, #b2e2e8, #b7bfcc)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)",
              "linear-gradient(-45deg, #d4e1f7, #7caebc, #68829e)",
              "linear-gradient(-45deg, #7da3a1, #2c7873, #004445, #324851)"
            ];

            var background = query.results.channel.item.condition.code;
            var descriptive = query.results.channel.item.condition.text;
            bubble.data("conditions", descriptive);
            console.log(descriptive);

            var specGradient = conditions[background];
            bubble.data("specGradient", specGradient);


            var g = dataResults[i];
            console.log(g);



            bubble.hover(function(){
                $(this).children("img").css({
                  "display" : "none"
                  });
                $(this).children(".text").css({
                  "display" : "inline-block"
                });
                $("body").css({
                  "background": conditions[background],
                  "animation-name": "hover",
                  "animation-duration": "6s",
                  "animation-iteration-count": "infinite",
                  "background-size": "400% 400%"
                });
              }, function(){
                $("img").css({
                  "display" : "inline-block"
                });
                $(".text").css({
                  "display" : "none"
                });
                $("body").css({
                  "background": "#30343a"
                });
            });




          // big bubbles move based on temp
          bubble.each(function (){
            var coordinates = {"left": Math.random(), "top": Math.random()}
            $(this).css(coordinates);
            $(this).data("coordinates", coordinates)
          });

          var temp = Math.pow(Math.floor(query.results.channel.item.condition.temp / 3), 2);
          var halfTemp = Math.pow(Math.floor(query.results.channel.item.condition.temp / 3), 2) / 3;
          console.log(temp);

          function moveBig() {
            bubble.each(function (){
              var coordinates = $(this).data("coordinates")
              $(this).animate({left: coordinates.left + Math.random()*temp}, {easing: "swing", queue: false, duration: 5000});
              $(this).animate({top: coordinates.top + Math.random()*halfTemp}, {easing: "swing", queue: false, duration: 5000});
            });
            window.setTimeout(moveBig, 5000);
          };
          moveBig();


          var high = query.results.channel.item.condition.temp;
          bubble.data("high", high);




          });
        };




        $(".window").hide();


        //big bubbles clickable
        $( ".Chicago" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + " degrees</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + " mph</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Denver" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".York" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Orleans" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Seattle" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Francisco" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Washington" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Phoenix" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });

        $( ".Maui" ).click(function() {
          var color = $(this).data("background");
          var windowName = $("<h3>" + $(this).data("cityName") + "</h3>");
          var temp = $("<p class ='v'>" + $(this).data("high") + "</p>");
          var conditions = $("<p class ='v'>" + $(this).data("conditions") + "</p>");
          var windSpeed = $("<p class ='v'>" + $(this).data("windSpeed") + "</p>");
          windowName.addClass("windowHead");
          $(".cityTitle").append(windowName);
          $(".temp").append(temp);
          $(".conditions").append(conditions);
          $(".windSpeed").append(windSpeed);
          $(".windowHead").css({"border-top" : "5px solid " + color + ""});
          $(".window").show();
          $("button").click(function() {
            $("h3").remove(".windowHead");
            $("p").remove(".v");
            $(".window").hide();
          });
        });








      };
    });
  });
});
