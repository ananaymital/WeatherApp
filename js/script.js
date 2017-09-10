function getFahrenheit() {

  var $weatherTemp = $("#weather");
  var $weatherIcon = $("#weatherIcon");

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=e48ee4aaa640e2c29127ac3ccddb675c",
      success: function(data) {
        console.log(data);
        if ((data.dt < data.sys.sunrise) || (data.dt > data.sys.sunset)) {
          var prefix = " wi wi-owm-night-";
        } else {
          var prefix = " wi wi-owm-";
        }
        var icon = prefix + data.weather[0].id;
        var Fahr = data.main.temp * (1.8) - 459.67;
        Fahr = Math.round(Fahr);
        $weatherTemp.html("<b>" + "<p>"  + data.name + ", " + data.sys.country + ": " + "</p>" + Fahr + "&deg F" + "</b>");
        $weatherIcon.html("<h1 class = '" + icon + "'>");

      }
    });
  });

}

}

function getCelsius() {

    var $weatherTemp = $("#weather");
    var $weatherIcon = $("#weatherIcon");

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=e48ee4aaa640e2c29127ac3ccddb675c",
        success: function(data) {
          if ((data.dt < data.sys.sunrise) || (data.dt > data.sys.sunset)) {
            var prefix = " wi wi-owm-night-";
          } else {
            var prefix = " wi wi-owm-";
          }
          var icon = prefix + data.weather[0].id;
          var Celsius = data.main.temp - 273.15;
          Celsius = Math.round(Celsius);
          $weatherTemp.html("<b>" + "<p>" + data.name + ", " + data.sys.country + ":" + "</p>" + Celsius + "&deg C" + "</b>");
          $weatherIcon.html("<h1 class = '" + icon + "'>");

        }
      });
    }
  );
  }
  }
/*
$(document).ready(function() {
  //getFahrenheit
});
*/
/*$("#Celsius").addEventListener('click', getCelsius());
$("#Fahrenheit").addEventListener('click', getFahrenheit());*/
