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
          var highTemps = forecastData.map(function(day){
          return day.high.fahrenheit;
          });
            $.each(highTemps, function(i, field){
                $("div").append(field + " ");
            });
        });
      });
    });


    // console.log(forecastData);

    // var highTemps = forecastData.map(function(day){
    //   return day.high.fahrenheit;
    // });

    // console.log(highTemps);
