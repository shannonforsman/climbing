app.directive('imageCarousel', function() {
  return {
    templateUrl: '/views/carousel.html',
    scope : {
      images : '='
    },
    link: function(scope, element, attrs) {
      scope.index = 0
      scope.nextImg = function() {
        if (scope.index === scope.images.length - 1) {
          scope.index = 0
        } else {
          scope.index ++
        }
      }
      scope.prevImg = function() {
        if (scope.index === 0) {
          scope.index = scope.images.length - 1
        } else {
          scope.index --
        }
      }
    }
  }
})
