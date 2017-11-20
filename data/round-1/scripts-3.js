$(document).ready(function(){


  // var back = $("<div></div>");
  // back.addClass("intro");
  // $(".d1").append(back);
  //
  // back.delay(1000).animate({display: "-100%"}, 1000, "swing");




  var dataUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';


  jQuery.getJSON(dataUrl, function(data) {
    console.log(data);

  // jQuery.getJSON(dataUrl, function(data) {
  //   console.log(data);


  $.each(data, function(i, query){
      var size = query.results.channel.astronomy.sunrise;
      console.log(size);
      var opacity = query.results.channel.atmosphere.visibility / 100;
      var text = $("<div>" + query.results.channel.lastBuildDate + "</div>");
      // var highbar = $("<div></div>");
      // var lowbar = $("<div></div>");
      var row = $("<div class='row'></div>");
      text.addClass("text" + " " + i);
      // highbar.addClass("highbar" + " " + i);
      // lowbar.addClass("lowbar" + " " + i);
      // highbar.css({"background-color": "rgba(242, 75, 29," + opacity + ")"});
      // lowbar.css({"background-color": "rgba(51, 84, 247," + opacity + ")"});
      $(".d1").append(row);
      row.append(text);
      // row.append(highbar);
      // row.append(lowbar);

      // highbar.each(function(){
      //   $(this).animate({width: size *750}, {easing: "swing", queue: false, duration: 800});
      // });
      // lowbar.each(function(){
      //   $(this).animate({width: size *750}, {easing: "swing", queue: false, duration: 800});
      // });
    });

  });

});
