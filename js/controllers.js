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
      'coordinates': [-105.2864265, 40.018228]
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
      'coordinates': [-105.29, 40.01]
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
        'coordinates': [-105.27, 40.02]
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
  $scope.checkBoxes = function () {
    if ($scope.search.properties.sport && $scope.search.properties.bouldering || !($scope.search.properties.sport) && !($scope.search.properties.bouldering)) {
      delete $scope.search.properties.sport
      delete $scope.search.properties.bouldering
    }
  }

  $scope.$watch('search', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.data = $filter('filter')($scope.source, $scope.search)
    }
  }, true)
}
])
