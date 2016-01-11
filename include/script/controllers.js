//Controllers
myApp.controller('mainCtr', ['$scope', 'datapip', '$location', function($scope, datapip, $location) {

  $scope.cityName = "";

  $scope.onSubmit = function() {
    datapip.cityName = $scope.cityName;
    $location.path("/result");
  };

}]);

myApp.controller('forecastCtr', ['$scope', 'datapip', 'weatherService', '$routeParams', function($scope, datapip, weatherService, $routeParams) {

  if (datapip.weatherResult == undefined || datapip.weatherResult.city == undefined || datapip.weatherResult.city.name !== datapip.cityName) {
    $scope.weatherResult = weatherService.getWeather(datapip.cityName, 7);
    //console.log($scope.weatherResult);
    angular.copy($scope.weatherResult, datapip.weatherResult);
  }

  //$scope.weatherResult = datapip.weatherResult;
  $scope.dlimit = $routeParams.days || '2';
  console.log($scope.weatherResult);
  //console.log($scope.weatherResult["city"]["name"]);
  $scope.K2C = function(degK) {
    return Math.round(degK - 273.15);
  };

  $scope.convert2Date = function(sec) {
    return new Date(sec * 1000);
  };


}]);
