myApp.directive('dailyWeatherResult', function() {
  return {
    restrict: 'E',
    templateUrl: 'dailyWeatherResult.html',
    replace: true,
    scope: {
      dailyWeather: "=",
      kToC: "&",
      toDate: "&"
    }
  }
});
