app.controller('ClimbInfoController', ['$scope', 'ClimbMarkers', '$routeParams', function ($scope, ClimbMarkers, $routeParams) {
  ClimbMarkers.get()
  .then(function (climbInfo) {
    var climb = climbInfo.filter(function(el) {
      return el._id === $routeParams.id
    })


    $scope.climbData = climb[0]
  })
}])
