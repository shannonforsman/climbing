app.factory('ClimbMarkers', ['$http', function ($http) {
  var climbs = {}
  climbs.get = function () {

    $http.get('link').
    then(function(response) {
      return response.data
    }, function(response) {
      console.log(response)
    })
  }
  return climbs
}])
