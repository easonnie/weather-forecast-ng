myApp.service('datapip', function() {
  this.cityName = '';
  this.weatherResult = {};
});

myApp.service('weatherService', ['$resource', function($resource) {

  this.getWeather = function(city, days, key) {
    key = "2de143494c0b295cca9337e1e96b00e0";
    var api = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
      callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

    return api.get({ q: city, cnt: days, appid: key });
  }



}]);
