$(document).ready(function(){

  // var back = $("<div></div>");
  // back.addClass("intro");
  // $(".load").append(back);

  $(".load").delay(1500).animate({display: "none"}, 1500, "swing").fadeOut();


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
            var opacity = query.results.channel.atmosphere.visibility / 100;
            var name = $("<div>" + query.results.channel.location.city + "</div>");

            var bubble = $("<div class='bubble'></div>");
            name.addClass("text" + " " + i);

            $(".d1").append(bubble);
            bubble.append(name);

            var r = query.results.channel.atmosphere.humidity * 2;
            var g = query.results.channel.wind.speed * 10;
            var b = query.results.channel.wind.direction;

            bubble.css({"background-color": "rgba("+ r +"," + g + "," + b + "," + opacity + ")"})

            bubble.hover(function(){
                $(this).addClass("hover");
                }, function(){
                $(this).removeClass("hover");
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
