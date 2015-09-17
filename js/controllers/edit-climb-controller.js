app.controller('EditClimbController', ['$scope', '$routeParams', 'ClimbMarkers', 'MarkerObj', function ($scope, $routeParams, ClimbMarkers, MarkerObj) {


MarkerObj.arr.forEach(function(el, index) {
  if (parseInt(el.id) === parseInt($routeParams.id)) {

    $scope.currentClimb = el
    console.log($scope.currentClimb)
    $scope.indexOfClimb = index
   }
})

$scope.addImage = function() {
  $scope.currentClimb.images.push({'id': Date.now()})
}

$scope.deleteImage = function(id) {
  var indexOfImage
  console.log('hi')
  $scope.currentClimb.images.forEach(function(el, index) {
    console.log(el)
    if (id == el.id) {
      indexOfImage = index
    }
  })
  console.log(indexOfImage)
  $scope.currentClimb.images.splice(indexOfImage, 1)
}

$scope.deleteMarker = function(link) {
  MarkerObj.arr.splice($scope.indexOfClimb, 1)
  ClimbMarkers.delete(link)
}


$scope.updateArea = function(climbObj) {
  console.log('start', climbObj)
  var obj = {}
  var props = {}
  var geom = {}

  geom['type'] = 'Point'
  geom['coordinates'] = []
  geom['coordinates'][0] = parseFloat(climbObj.geometry.coordinates[0])
  geom['coordinates'][1] = parseFloat(climbObj.geometry.coordinates[1])

  console.log('start', climbObj)

  props['name'] = climbObj.properties.name
  props['genLocation'] = climbObj.properties.genLocation
  props['hikeLength'] = climbObj.properties.hikeLength
  props['type'] = climbObj.properties.type
  props['description'] = climbObj.properties.description
  props['shade'] = climbObj.properties.shade
  props['level'] = climbObj.properties.level
  props['popular'] = climbObj.properties.popular
  props['size'] = climbObj.properties.size

  if ($scope.currentClimb.images) {
    console.log('hi')
    obj['images'] = $scope.currentClimb.images
  }
  obj['properties'] = props
  obj['type'] = 'Feature'
  obj['geometry'] = geom
  obj['id'] = climbObj.id

  MarkerObj.arr[$scope.index] = obj
  ClimbMarkers.put(obj)
  window.location="/#/climbs/" + $routeParams.id
}


}])
