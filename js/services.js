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
      console.log(response)
    });
  }
  return climbs
}])

app.factory('ClimbInfo', ['$http', '$q', function ($http, $q) {
  var link = 'http://localhost:3000/climbing-info'
  var climbInfo = {}
  climbInfo.get = function () {
    var deferred = $q.defer()
    $http.get(link).success(function (data) {
      deferred.resolve(data)
    }).error(function () {
      deferred.reject('Error!')
    })
    return deferred.promise
  }
  climbInfo.post = function(obj) {
    $http.post(link, obj).
    then(function(response) {
      return response.data
    }, function(response) {
      console.log(response)
    });
  }
  return climbInfo
}])


// teas.get = function () {
//   var deferred = $q.defer()
//   $http.get('data/tea.json').success(function (data) {
//     deferred.resolve(data)
//   }).error(function () {
//     deferred.reject('Error!')
//   })
//   return deferred.promise
// }
