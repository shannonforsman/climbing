app.factory('ClimbMarkers', ['$http', '$q', '$route', '$location', function ($http, $q, $route, $location) {
  var link = 'https://limitless-citadel-5215.herokuapp.com/climbing-markers'
  var climbs = {}

  climbs.get = function () {
    console.log($location)
    console.log('route', $route.routes['/climbs'])

    var deferred = $q.defer()
    $http.get(link).success(function (data) {
      deferred.resolve(data)
    }).error(function () {
      deferred.reject('Error!')
    })
    return deferred.promise
  }

  climbs.post = function(obj) {
    $http.post(link, obj).then(function(response){

      $route.reload()
    })
  }

  climbs.put = function(obj) {
    $http.put(link, obj).then(function(response) {
      $route.reload()
    })
  }

  climbs.delete = function(id) {
    link = link + '/delete'
    $http.post(link, {'id': id}).then(function(response) {
    })
    window.location="/#/climbs/"

  }
  return climbs

}])

app.factory('MarkerObj', ['ClimbMarkers', function (ClimbMarkers) {
  var markers = {}
  return markers
  // return {
  //   arr : ClimbMarkers.get()
  // }

  // if (markers.arr === undefined) {
  //   ClimbMarkers.get().then(function(results) {
  //     return {
  //       arr: results
  //     }
  //   })
  // } else {
  //   return markers
  // }
}])

// return {
//     topics: _topics,
//     getTopics: _getTopics
// };

app.factory('WeatherAPI', ['$http', '$q', function ($http, $q) {
  var weather = {}

  weather.get = function (lat, long) {
    var link = "http://api.wunderground.com/api/b5b6e07fa58e9ebc/hourly/q/" + lat + "," + long + ".json"
    var deferred = $q.defer()
    $http.get(link).success(function (data) {
      deferred.resolve(data)
    }).error(function () {
      deferred.reject('Error!')
    })
    return deferred.promise
  }
  return weather
}])

app.factory('Path', ['$location', function ($location) {
  var path = {}
  path.location = $location.path()
  return path
}])
