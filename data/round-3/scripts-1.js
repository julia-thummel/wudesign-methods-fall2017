$(document).ready(function(){

  // var back = $("<div></div>");
  // back.addClass("intro");
  // $(".load").append(back);

  $(".load").delay(1500).animate({display: "none"}, 1500, "swing").fadeOut();

  $(".circle").each(function (){
    var coordinates = {"left": Math.random()*1300, "top": Math.random()*600}
    $(this).css(coordinates);
    $(this).data("coordinates", coordinates)
  });

  function move() {
    $(".circle").each(function (){
      var size = Math.random()*20;
      var coordinates = $(this).data("coordinates")
      $(this).animate({width: size}, {easing: "swing", queue: false, duration: 10000});
      $(this).animate({height: size}, {easing: "swing", queue: false, duration: 10000});
      $(this).animate({left: coordinates.left + Math.random()*50}, {easing: "swing", queue: false, duration: 10000});
      $(this).animate({top: coordinates.top + Math.random()*50}, {easing: "swing", queue: false, duration: 10000});
    });
    window.setTimeout(move, 10000);
  };

  move();


  // jQuery(function($) {
    //   var x,y;
    //   $(".circle").each(function (){
    //     $(".circle").mousemove(function(event) {
    //       var offset = $(this).offset();
    //       x = event.pageX- offset.left;
    //       y = event.pageY- offset.top;
    //       $(this).css({"left": x});
    //       $(this).css({"top": y});
    //   });
    // });
  // });

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


            // add icon
            var cityName = query.results.channel.location.city;
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


            // determine color
            var r = query.results.channel.wind.chill * 3;
            var g = query.results.channel.wind.speed * 10;
            var b = Math.floor(9500 / query.results.channel.wind.chill);

            bubble.css({"background": "rgba("+ r +"," + g + "," + b + "," + opacity + ")"})



            // bubble.hover(function(){
            //     $(this).addClass("hover");
            //     }, function(){
            //     $(this).removeClass("hover");
            // });

            // var color1 = Math.floor(query.results.channel.item.lat) *4;
            // var color2 = Math.floor(query.results.channel.item.long)* -1;
            // var color3 = query.results.channel.atmosphere.humidity * 2;

            // gradient hover colors
            var color1 = query.results.channel.item.condition.temp * 4;
            var color2 = Math.floor(query.results.channel.item.condition.temp / 2);
            var color3 = query.results.channel.atmosphere.humidity * 2;


            console.log(color1, color2, color3);

            bubble.hover(function(){
                $("img").css({
                  "display" : "none"
                  });
                $(".text").css({
                  "display" : "inline-block"
                });
                $("body").css({
                  "background": "linear-gradient(-45deg, rgba("+ color1 +"," + color3 + "," + color2 + ","  + opacity + "), rgba("+ color2 +"," + color1 + "," + color3 + ","  + opacity + "), rgba("+ color3 +"," + color2 + "," + color1 + "," + opacity + "))",
                  // "background": "linear-gradient(-45deg, #ef3434, #f4464c, #4685f4, #46e5f4)",
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

            // highbar.each(function(){
            //   $(this).animate({width: size *750}, {easing: "swing", queue: false, duration: 800});
            // });
            // lowbar.each(function(){
            //   $(this).animate({width: size *750}, {easing: "swing", queue: false, duration: 800});
          });


        };

      };

    });
  });

});
