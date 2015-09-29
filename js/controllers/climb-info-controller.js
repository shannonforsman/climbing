app.controller('ClimbInfoController', ['$scope', 'ClimbMarkers', '$routeParams', 'MarkerObj', 'WeatherAPI', 'Path', '$location', function ($scope, ClimbMarkers, $routeParams, MarkerObj, WeatherAPI, Path, $location) {

  Path.location = $location.path()
  document.body.id = "show"

  $scope.climbData
  $scope.indexOfClimb

  $scope.time = (new Date()).getHours()

  if (MarkerObj.arr === undefined) {
    ClimbMarkers.get()
    .then(function (markers) {
      MarkerObj.arr = markers
      MarkerObj.arr.forEach(function(el, index) {
        if (parseInt(el.id) === parseInt($routeParams.id)) {
          $scope.climbData = el
          var long = $scope.climbData.geometry.coordinates[0]
          var lat = $scope.climbData.geometry.coordinates[1]
          $scope.indexOfClimb = index

          WeatherAPI.get(lat, long).then(function(weather) {
            $scope.weatherData = weather.hourly_forecast
          })
         }
      })
    })
  } else {
    MarkerObj.arr.forEach(function(el, index) {
      if (parseInt(el.id) === parseInt($routeParams.id)) {
        $scope.climbData = el
        console.log(el)
        var long = $scope.climbData.geometry.coordinates[0]
        var lat = $scope.climbData.geometry.coordinates[1]
        $scope.indexOfClimb = index
        WeatherAPI.get(lat, long).then(function(weather) {
          $scope.weatherData = weather.hourly_forecast
        })
       }
    })
  }
  $scope.showInfo = function() {
    var modal = document.getElementById('modal')
    var leftArrow = document.getElementsByClassName('nextImg')[0]
    var rightArrow = document.getElementsByClassName('nextImg')[1]
    var more = document.getElementById('more')
    var header = document.getElementsByTagName('header')[0]
    console.log(header)
    
    header.classList.add('add-x')

    modal.style.height = '100%'
    modal.style.paddingTop = '75px'
    modal.style.overflow = 'scroll'

    leftArrow.style.display = 'block'
    rightArrow.style.display = 'block'

    more.style.display = 'none'
  }
}])
