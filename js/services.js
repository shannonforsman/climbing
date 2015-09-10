app.factory('ClimbMarkers', ['$http', '$q', function ($http, $q) {
  var link = 'http://localhost:3000/climbing-markers'
  var climbs = {}

  climbs.get = function () {
    var deferred = $q.defer()
    $http.get(link).success(function (data) {
      deferred.resolve(data)
    }).error(function () {
      deferred.reject('Error!')
    })
    return deferred.promise
  }

  climbs.post = function(obj) {
    $http.post(link, obj).
    then(function(response) {
      return response.data
    }, function(response) {
    });
  }

  climbs.put = function(obj) {
    $http.put(link, obj).
    then(function(response) {
      return response.data
    }, function(response) {
    });
  }
  return climbs
}])
