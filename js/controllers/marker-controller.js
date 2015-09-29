app.controller('MarkerController', ['Path', '$scope', '$filter', '$location', 'ClimbMarkers', 'MarkerObj', function (Path, $scope, $filter, $location, ClimbMarkers, MarkerObj) {

  document.body.id = "home"

  $scope.showFilters = function() {

    document.body.id = "home"
    var hide = document.querySelector('.hide')
    hide.classList.toggle('show')
    window.location="/#/climbs/"
  }

  $scope.closeFilters = function() {
    if (document.body.id !== "home") {
      document.body.id = "home"
    }
    if (document.querySelector('.show')) {
      var show = document.querySelector('.show')
      show.classList.remove('show')
    }
  }

  $scope.closeModal = function() {
    window.location="/#/climbs/"
    document.body.id = "home"
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

  // $scope.ddSelectOptions = [
  //     {
  //         text: 'Option1',
  //         value: 'a value'
  //     },
  //     {
  //         text: 'Option2',
  //         value: 'another value',
  //         someprop: 'somevalue'
  //     },
  //
  //     {
  //         // Any divider option with a 'text' property will
  //         // behave similarly to a divider and cannot be selected.
  //         divider: true,
  //         text: 'divider label'
  //     },
  //     {
  //         // Example of an option with the 'href' property
  //         text: 'Option4',
  //         href: '#option4'
  //     }
  // ];


  // $scope.ddSelectSelected = {}; // Must be an object


    $scope.ddSelectOptions = [
        {
            text: 'Beginner',
            value: 'Beginner'
        },
        {
            text: 'Intermediate',
            value: 'Intermediate'
        },
        {
            text: 'Expert',
            value: 'Expert'
        }
    ];
    $scope.ddSelectSelected = {
       text: "Select an Option"
     };

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
