//Router
myApp.config(function($routeProvider) {

  $routeProvider

  .when('', {
    templateUrl: 'search.html',
    controller: 'mainCtr'
  })

  .when('/', {
    templateUrl: 'search.html',
    controller: 'mainCtr'
  })

  .when('/result', {
    templateUrl: 'result.html',
    controller: 'forecastCtr'
  })

  .when('/result/:days', {
    templateUrl: 'result.html',
    controller: 'forecastCtr'
  })

  .otherwise('/', {
    templateUrl: 'search.html',
    controller: 'mainCtr'
  });

});
