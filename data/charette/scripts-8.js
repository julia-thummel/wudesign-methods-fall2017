// jQuery(function($){

  // var dataUrl = 'https://gist.githubusercontent.com/abesiemsen/916d376e77b659a793d9d8843e3287ee/raw/10-day-forecast.json';

  // jQuery.getJSON(dataUrl, function(forecastData) {

    // var items = [];
    // $.each( forecaseData, function( key, val ) {
    //   items.push( "<li id='" + key + "'>" + val + "</li>" );
    // });
    //
    // $( "<ul/>", {"class": "my-new-list", html: items.join( "" )}).appendTo( "body" );




    $(document).ready(function(){

      var dataUrl = 'https://gist.githubusercontent.com/abesiemsen/916d376e77b659a793d9d8843e3287ee/raw/10-day-forecast.json';

      $("button").click(function(){
        jQuery.getJSON(dataUrl, function(forecastData) {
          console.log(forecastData);
          // var highTemps = forecastData.map(function(day){
          // return day.high.fahrenheit;
          // });
          // var date = forecastData.map(function(day){
          // return day.date.pretty;
          // });

          // var sortedForecast = forecastData.sort(function(a, b){
          //   return a.high.fahrenheit - b.high.fahrenheit;
          // });
          //
          // console.log(sortedForecast.map(function(day){
          //   return day.high.fahrenheit;
          //   })
          // );

          $.each(forecastData, function(i, day){
              var size = (day.high.fahrenheit - 69)/6;
              var opacity = (day.high.fahrenheit - 69)/ 6;
              var text = $("<div>" + day.date.weekday + " " + day.high.fahrenheit + "</div>");
              var bar = $("<div></div>");
              var row = $("<div class='row'></div>");
              text.addClass("text" + " " + i);
              bar.addClass("bar" + " " + i);
              bar.css({"background-color": "rgba(242, 75, 29," + opacity + ")"});
              bar.css({"width": size *750});
              $(".d1").append(row);
              row.append(text);
              row.append(bar);
          });
            // $.each(highTemps, function(i, field){
            //     $(".d2").append(field + " ");
            // });
            // $.each(date, function(i, field){
            //     $(".d2").append(field + " ");
            // });
        });
      });
    });




    // console.log(forecastData);

    // var highTemps = forecastData.map(function(day){
    //   return day.high.fahrenheit;
    // });

    // console.log(highTemps);
