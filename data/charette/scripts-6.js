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
              var size = day.height.fahrenheit
              var opacity = (day.high.fahrenheit - 69)/ 6;
              var row = $("<div>" + day.date.weekday + " " + day.high.fahrenheit + "</div>");
              row.addClass("day" + " " + i)
              row.css({"background-color": "rgba(242, 75, 29," + opacity + ")"})
              $(".d1").append(row);
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
