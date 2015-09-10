app.controller('EditClimbController', ['$scope', '$routeParams', 'ClimbMarkers', function ($scope, $routeParams, ClimbMarkers ) {

ClimbMarkers.get()
.then(function (climbInfo) {
  var climb = climbInfo.filter(function(el) {
    return el._id === $routeParams.id
  })
  $scope.currentClimb = climb[0]
})

$scope.updateArea = function(areaName, lat, long, description, hikeLength, type, id) {
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

    obj['_id'] = id
    obj['properties'] = props
    obj['type'] = 'Feature'
    obj['geometry'] = geom


    console.log(obj)

    // ClimbMarkers.post(obj)

  ClimbMarkers.put(obj)
}

}])
