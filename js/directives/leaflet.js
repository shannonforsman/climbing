app.directive('leafletDirective', function () {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      markerCheck: '='
    },
    replace: true,
    template: '<div></div>',
    link: function (scope, element, attrs) {
      var map = L.map(attrs.id, {
        center: [40, -105.38],
        zoomControl: false,
        zoom: 13
      })
      new L.Control.Zoom({ position: 'bottomright' }).addTo(map)

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: id,
        accessToken: token
      }).addTo(map)

      var areaIcon = L.icon({
        iconUrl: '/images/marker.png',
        iconSize: [31.5, 35], // size of the icon
        iconAnchor: [15, 20], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
      })

      var geojsonLayer = L.geoJson(scope.data, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: areaIcon
          })
        }
      }).addTo(map)

      scope.$watch('data', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          geojsonLayer.clearLayers()
          geojsonLayer.addData(scope.data)
        }
      }, true)

      function onEachFeature (feature, layer) {
        layer.on({
          click: function (e) {
            window.location = '/#/climbs/' + feature.id
          }
        })
      }
    }
  }
})
