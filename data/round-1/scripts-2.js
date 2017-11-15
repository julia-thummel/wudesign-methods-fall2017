$(document).ready(function(){

  var dataUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  // var dataUrl = 'https://api.fixer.io/latest';

  // $.ajax({
  //     url: "https://data.seattle.gov/resource/b3ws-t8sc.json?$where=within_circle(location, 47.59, -122.33, 1000)",
  //     type: "GET",
  //     data: {
  //       "$limit" : 5000,
  //       "$$app_token" : "DnqWE7LA63IfsD0OWUDE7kbHJ"
  //     }
  // }).done(function(data) {
  //   alert("Retrieved " + data.length + " records from the dataset!");
  //   console.log(data);
  // });

  jQuery.getJSON(dataUrl, function(data) {
    console.log(data);


  $.each(data, function(i, query){
      var size = query.results.channel.astronomy.sunrise;
      console.log(size);
      // var opacity = (day.high.fahrenheit - 69)/ 6;
      // var text = $("<div>" + day.date.weekday + " " + day.high.fahrenheit + " / " + day.low.fahrenheit + "</div>");
      // var highbar = $("<div></div>");
      // var lowbar = $("<div></div>");
      // var row = $("<div class='row'></div>");
      // text.addClass("text" + " " + i);
      // highbar.addClass("highbar" + " " + i);
      // lowbar.addClass("lowbar" + " " + i);
      // highbar.css({"background-color": "rgba(242, 75, 29," + opacity + ")"});
      // lowbar.css({"background-color": "rgba(51, 84, 247," + opacity + ")"});
      // $(".d1").append(row);
      // row.append(text);
      // row.append(highbar);
      // row.append(lowbar);
      //
      // highbar.each(function(){
      //   $(this).animate({width: size *750}, {easing: "swing", queue: false, duration: 800});
      // });
      // lowbar.each(function(){
      //   $(this).animate({width: size *750}, {easing: "swing", queue: false, duration: 800});
      // });
    });

  });


});
