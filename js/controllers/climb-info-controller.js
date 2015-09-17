app.controller('ClimbInfoController', ['$scope', 'ClimbMarkers', '$routeParams', 'MarkerObj', 'WeatherAPI', function ($scope, ClimbMarkers, $routeParams, MarkerObj, WeatherAPI) {

  $scope.climbData
  $scope.indexOfClimb

  $scope.time = (new Date()).getHours()

  MarkerObj.arr.forEach(function(el, index) {
    if (parseInt(el.id) === parseInt($routeParams.id)) {
      $scope.climbData = el
      console.log(el)
      var long = $scope.climbData.geometry.coordinates[0]
      var lat = $scope.climbData.geometry.coordinates[1]
      $scope.indexOfClimb = index

      WeatherAPI.get(lat, long).then(function(weather) {
        $scope.weatherData = weather.hourly_forecast
        console.log($scope.weatherData)
      })
     }
  })

}])
