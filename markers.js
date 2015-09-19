[
{
"_id": "55ee23e97cf292b44dd01390",
"properties": {
"hikeLength": "medium",
"type": "bouldering",
"name": "Area1"
},
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [
-105.2864265,
40.018228
]
}
},
{
"_id": "55ee24087cf292b44dd01391",
"properties": {
"hikeLength": "medium",
"type": "bouldering",
"name": "Area2"
},
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [
-105.29,
40.01
]
}
},
{
"_id": "55ee24237cf292b44dd01392",
"properties": {
"hikeLength": "short",
"type": "sport",
"name": "Area3"
},
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [
-105.27,
40.02
]
}
},
{
"_id": "55ee24407cf292b44dd01393",
"properties": {
"hikeLength": "long",
"type": "bouldering",
"name": "Area4"
},
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [
-105.27296,
40.033827
]
}
},





app.controller('MarkerController', ['Path', '$scope', '$filter', '$location', 'ClimbMarkers', 'MarkerObj', function (Path, $scope, $filter, $location, ClimbMarkers, MarkerObj) {

  $scope.path = function() {
    return Path.location === "/climbs/new"
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
