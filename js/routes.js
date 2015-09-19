app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/climbs', {
      controller: 'HomeController',
      templateUrl: 'views/home.html',
      name: 'home'
    })
    .when('/climbs/new', {
      templateUrl: 'views/new-climb.html',
      controller: 'NewClimbController',
      name: 'add climb'
    })
    .when('/climbs/:id', {
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
