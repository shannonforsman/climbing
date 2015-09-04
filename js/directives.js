app.directive('leafletDirective', function () {
  return {
    restrict: 'EA',
    scope: {
      data: '='
    },
    replace: true,
    template: '<div></div>',
    link: function (scope, element, attrs) {
      var map = L.map(attrs.id, {
        center: [0, 0],
        zoom: 4
      })
      // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      //   maxZoom: 18
      // }).addTo(map)


      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'sforsman1.na9fn83i',
          accessToken: 'pk.eyJ1Ijoic2ZvcnNtYW4xIiwiYSI6InhNQTZTSEUifQ.HQMF5-AuRCoJOKk2Vt7mlw'
      }).addTo(map);

      var geojsonLayer = L.geoJson(scope.data, {
        onEachFeature: onEachFeature
      }).addTo(map)

      scope.$watch('data', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          geojsonLayer.clearLayers()
          geojsonLayer.addData(scope.data)
        }
      }, true)

      var modal = document.getElementById('modal')

      function onEachFeature (feature, layer) {
        layer.on({
          click: function () {
            modal.innerHTML = feature.properties.id
            console.log(feature.properties.id)
          }
        })
      }

    }
  }
})
