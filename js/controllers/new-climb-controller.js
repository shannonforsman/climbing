app.controller('NewClimbController', ['$scope', '$http', 'ClimbMarkers', 'MarkerObj',  function ($scope, $http, ClimbMarkers, MarkerObj) {

  $scope.imgArr = [{id: 'img1'}]

  $scope.addImage = function() {
    $scope.imgArr.push({'id': Date.now() })
  }

  $scope.submit = function(climbObj) {
    var obj = {}
    var props = {}
    var geom = {}

    geom['type'] = 'Point'
    geom['coordinates'] = []
    geom['coordinates'][0] = parseFloat(climbObj.long)
    geom['coordinates'][1] = parseFloat(climbObj.lat)

    props['name'] = climbObj.areaName
    props['genLocation'] = climbObj.genLocation
    props['hikeLength'] = climbObj.hikeLength
    props['type'] = climbObj.type
    props['description'] = climbObj.description
    props['shade'] = climbObj.shade
    props['level'] = climbObj.level
    props['size'] = climbObj.size
    props['popular'] = climbObj.popular

    if ($scope.imgArr[0].url !== undefined) {
      obj['images'] = $scope.imgArr
    }

    obj['properties'] = props
    obj['type'] = 'Feature'
    obj['geometry'] = geom
    obj['id'] = Date.now().toString()

    console.log(obj)

    MarkerObj.arr.push(obj)
    ClimbMarkers.post(obj)

    window.location="/#/climbs/"
  }


}])
