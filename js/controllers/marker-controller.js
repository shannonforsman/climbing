app.controller('MarkerController', ['Path', '$scope', '$filter', '$location', 'ClimbMarkers', 'MarkerObj', function (Path, $scope, $filter, $location, ClimbMarkers, MarkerObj) {

  $scope.showFilters = function() {
    var hide = document.querySelector('.hide')
    hide.classList.toggle('show')
    window.location="/#/climbs/"
  }

  $scope.path = function() {
    return Path.location === "/climbs"
  }

  ClimbMarkers.get()
  .then(function (markers) {
    MarkerObj.arr = markers

    $scope.source = MarkerObj.arr

    $scope.data = MarkerObj.arr

    $scope.search = {
        'properties': {}
    }

    $scope.allTypes = function () {
      delete $scope.search.properties.type
    }

    $scope.reset = function() {
      $scope.search.properties = {}
    }

    $scope.$watch('data', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.data = newVal
      }
    })

    $scope.$watch('search', function (newVal, oldVal) {
      if ($scope.search.properties.popular === false) {
        delete $scope.search.properties.popular
      }
      if ($scope.search.properties.type === 'no') {
        delete $scope.search.properties.type
      }
      if ($scope.search.properties.hikeLenth === 'all' ) {
        delete $scope.search.properties.hikeLength
      }
      if (newVal !== oldVal) {
        $scope.data = $filter('filter')($scope.source, $scope.search)
      }
    }, true)
  })
}])



// app.controller('MarkerController', ['$scope', '$filter', 'ClimbMarkers', 'MarkerObj', function ($scope, $filter, ClimbMarkers, MarkerObj) {
//   ClimbMarkers.get()
//   .then(function (markers) {
//     console.log(markers)
//     $scope.source = MarkerObj.arr
//
//     $scope.data = angularcopy
//     $scope.search = {
//       'properties': {}
//     }
//
//     console.log('marker', MarkerObj)
//
//     $scope.allTypes = function () {
//       delete $scope.search.properties.type
//     }
//
//     $scope.$watch('data', function (newVal, oldVal) {
//       if (newVal !== oldVal) {
//         $scope.data = newVal
//         $scope.source = newVal
//       }
//     })
//
//     $scope.$watch('search', function (newVal, oldVal) {
//       if ($scope.search.properties.type === 'no') {
//         delete $scope.search.properties.type
//       }
//       if (newVal !== oldVal) {
//         $scope.data = $filter('filter')($scope.source, $scope.search)
//       }
//     }, true)
//   //
//   })
// }])
