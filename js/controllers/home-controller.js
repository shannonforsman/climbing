app.controller('HomeController', ['Path', '$location', function (Path, $location) {
  Path.location = $location.path()
}])
