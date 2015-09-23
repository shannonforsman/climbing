app.controller('NewClimbController', ['$location', '$scope', '$http', 'ClimbMarkers', 'MarkerObj', 'Path',  function ($location, $scope, $http, ClimbMarkers, MarkerObj, Path) {

  Path.location = $location.path()
  document.body.id = "new-climb"

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

    if (MarkerObj.arr === undefined) {
      ClimbMarkers.get()
      .then(function (markers) {
        MarkerObj.arr = markers
        MarkerObj.arr.push(obj)
        ClimbMarkers.post(obj)
      })
    } else {
      MarkerObj.arr.push(obj)
      ClimbMarkers.post(obj)
    }
    console.log(MarkerObj)
    window.location="/#/climbs/"
  }


}])
