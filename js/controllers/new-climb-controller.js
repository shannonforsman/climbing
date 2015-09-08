app.controller('NewClimbController', ['$scope', '$http', 'ClimbMarkers', function ($scope, $http, ClimbMarkers) {
  $scope.submit = function(areaName, lat, long, description, hikeLength, type) {
    var obj = {}
    var props = {}
    var geom = {}

    geom['type'] = 'Point'
    geom['coordinates'] = []
    geom['coordinates'][0] = parseFloat(long)
    geom['coordinates'][1] = parseFloat(lat)

    props['hikeLength'] = hikeLength
    props['type'] = type
    props['name'] = areaName

    obj['properties'] = props
    obj['type'] = 'Feature'
    obj['geometry'] = geom

    console.log(obj)

    ClimbMarkers.post(obj)

    // $http.post(link + 'articles', obj).
    // then(function(response) {
    //   $scope.list = response.data
    // }, function(response) {
    //   console.log(response)
    // });
    // $scope.title = ''
    // $scope.author = ''
    // $scope.imgUrl = ''
    // $scope.description = ''

  }
}])
