app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/climbs', {
      templateUrl: 'views/home.html'
    })
    .when('/climbs/new', {
      templateUrl: 'views/new-climb.html',
      controller: 'NewClimbController'
    })
    .when('/climbs/:id/show', {
      templateUrl: 'views/climb-info.html',
      controller: 'ClimbInfoController'
    })
    .when('/climbs/:id/edit', {
      templateUrl: 'views/edit.html',
      controller: 'EditClimbController'
    })
    .otherwise({
      redirectTo: '/climbs'
    })
}])
