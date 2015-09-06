app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/climbs/add-climb', {
      templateUrl: 'views/new-climb.html',
      controller: 'NewClimbController'
    })
    .when('/:climbName/info', {
      templateUrl: 'views/climb-info.html',
      controller: 'ClimbInfoController'
    })
    .otherwise({
      redirectTo: '/'
    })
}])
