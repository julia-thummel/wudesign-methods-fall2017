$(document).ready(function(){

  var dataUrl = 'https://www.movebank.org/movebank/service/public/json?&study_id=2911040&individual_local_identifiers[]=4262-84830876&max_events_per_individual=5&sensor_type=gps';

  jQuery.getJSON(dataUrl, function(data) {
    console.log(data);
  });

});
