app.controller('MarkerController', ['$scope', '$filter', 'ClimbMarkers', function ($scope, $filter, ClimbMarkers) {
  ClimbMarkers.get()
  .then(function (markers) {
    console.log(markers)
    $scope.source = markers

    $scope.data = angular.copy($scope.source)
    $scope.search = {
      'properties': {}
    }

    $scope.allTypes = function () {
      delete $scope.search.properties.type
    }
    $scope.$watch('search', function (newVal, oldVal) {
      if ($scope.search.properties.type === 'no') {
        delete $scope.search.properties.type
      }
      if (newVal !== oldVal) {
        $scope.data = $filter('filter')($scope.source, $scope.search)
      }
    }, true)
  })
}])
