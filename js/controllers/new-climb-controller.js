app.controller('NewClimbController', ['$scope', '$http', function ($scope, $http) {
  $scope.submit = function(areaName, lat, long, description, hikeLength, sport, bouldering) {
    var obj = {}
    var props = {}
    var geom = {}

    geom['type'] = 'Point'
    geom['coordinates'] = []
    geom['coordinates'][0] = long
    geom['coordinates'][1] = lat

    props['hikeLength'] = hikeLength
    props['sport'] = sport
    props['bouldering'] = bouldering
    props['name'] = areaName

    obj['properties'] = props
    obj['type'] = 'Feature'
    obj['geometry'] = geom

    console.log(obj)

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
