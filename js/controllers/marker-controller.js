app.controller('MarkerController', ['$scope', '$filter', function ($scope, $filter) {
  $scope.source = [{
    'type': 'Feature',
    'properties': {
      'id': 1,
      'hikeLength': 'medium',
      'type': 'sport',
      'name': 'Foo'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [-105.2864265, 40.018228]
    }
  }, {
    'type': 'Feature',
    'properties': {
      'id': 2,
      'hikeLength': 'short',
      'type': 'bouldering',
      'name': 'Bar'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [-105.29, 40.01]
    }
  },
    {
      'type': 'Feature',
      'properties': {
        'id': 3,
        'hikeLength': 'short',
        'type': 'bouldering',
        'name': 'Bar'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-105.27, 40.02]
      }
    }]
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
}
])
