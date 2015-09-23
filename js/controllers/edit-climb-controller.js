app.controller('EditClimbController', ['$scope', '$routeParams', '$location', 'ClimbMarkers', 'MarkerObj', 'Path', function ($scope, $routeParams, $location, ClimbMarkers, MarkerObj, Path) {

Path.location = $location.path()


document.body.id = "edit"



if (MarkerObj.arr === undefined) {
  ClimbMarkers.get()
  .then(function (markers) {
    MarkerObj.arr = markers
    MarkerObj.arr.forEach(function(el, index) {
      if (parseInt(el.id) === parseInt($routeParams.id)) {
        $scope.currentClimb = el
        $scope.indexOfClimb = index
       }
    })
  })
} else {
  MarkerObj.arr.forEach(function(el, index) {
    if (parseInt(el.id) === parseInt($routeParams.id)) {
      $scope.currentClimb = el
      $scope.indexOfClimb = index
     }
  })
}

$scope.imgArr = [{id: 'img1'}]

$scope.addImage = function() {
  $scope.currentClimb.images ? $scope.currentClimb.images.push({'id': Date.now()}) : $scope.imgArr.push({'id': Date.now() })
}

$scope.deleteImage = function(id) {
  var indexOfImage
  if (!$scope.currentClimb.images) {
    $scope.imgArr.forEach(function(el, index) {
      if (id == el.id) {
        indexOfImage = index
      }
    })
    $scope.imgArr.splice(indexOfImage, 1)
  } else {
    $scope.currentClimb.images.forEach(function(el, index) {
      if (id == el.id) {
        indexOfImage = index
      }
    })
    $scope.currentClimb.images.splice(indexOfImage, 1)
  }
}

$scope.deleteMarker = function(id) {
  MarkerObj.arr.splice($scope.indexOfClimb, 1)
  ClimbMarkers.delete(id)
}

$scope.updateArea = function(climbObj) {
  var obj = {}
  var props = {}
  var geom = {}

  geom['type'] = 'Point'
  geom['coordinates'] = []
  geom['coordinates'][0] = parseFloat(climbObj.geometry.coordinates[0])
  geom['coordinates'][1] = parseFloat(climbObj.geometry.coordinates[1])

  props['name'] = climbObj.properties.name
  props['genLocation'] = climbObj.properties.genLocation
  props['hikeLength'] = climbObj.properties.hikeLength
  props['type'] = climbObj.properties.type
  props['description'] = climbObj.properties.description
  props['shade'] = climbObj.properties.shade
  props['level'] = climbObj.properties.level
  props['popular'] = climbObj.properties.popular
  props['size'] = climbObj.properties.size

  if ($scope.currentClimb.images || $scope.imgArr) {
    obj['images'] = $scope.currentClimb.images || $scope.imgArr
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
