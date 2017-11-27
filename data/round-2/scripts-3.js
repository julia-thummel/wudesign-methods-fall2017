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
            var name = $("<div>" + query.results.channel.location.city + "</div>");

            var bubble = $("<div class='bubble'></div>");
            name.addClass("text" + " " + i);

            $(".d1").append(bubble);
            bubble.append(name);

            var r = query.results.channel.atmosphere.humidity * 2;
            var g = query.results.channel.wind.speed * 10;
            var b = query.results.channel.wind.direction;

            bubble.css({"background": "rgba("+ r +"," + g + "," + b + "," + opacity + ")"})


            // bubble.hover(function(){
            //     $(this).addClass("hover");
            //     }, function(){
            //     $(this).removeClass("hover");
            // });

            bubble.hover(function(){
              var color1 = "#" + query.results.channel.item.condition.temp + "0000";
                $(this).css({
                  "background": "linear-gradient(-45deg," + color1 + ", #E73C7E, #23A6D5, #23D5AB)",
                  "animation-name": "hover",
                  "animation-duration": "6s",
                  "animation-iteration-count": "infinite",
                  "background-size": "400% 400%"
                });
              }, function(){
                $(this).css({
                  "background": "rgba("+ r +"," + g + "," + b + "," + opacity + ")"
                });
            });



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
