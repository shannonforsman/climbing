app.controller('MarkerController', ['$scope', '$filter', function ($scope, $filter) {
  $scope.source = [{
    'type': 'Feature',
    'properties': {
      'id': 1,
      'hikeLength': 'medium',
      'sport': 'yes',
      'bouldering': 'no',
      'name': 'Foo'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [1.0, 1.0]
    }
  }, {
    'type': 'Feature',
    'properties': {
      'id': 2,
      'hikeLength': 'short',
      'bouldering': 'yes',
      'sport': 'no',
      'name': 'Bar'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [2.0, 2.0]
    }
  },
    {
      'type': 'Feature',
      'properties': {
        'id': 3,
        'hikeLength': 'short',
        'bouldering': 'yes',
        'sport': 'no',
        'name': 'Bar'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [10.0, 2.0]
      }
    }]
  $scope.data = angular.copy($scope.source)
  $scope.search = {
    'properties': {}
  }

  $scope.allTypes = function () {
    delete $scope.search.properties.sport
    delete $scope.search.properties.bouldering
  }

  console.log($scope.search)
  $scope.$watch('search', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.data = $filter('filter')($scope.source, $scope.search)
    }
  }, true)
}
])
