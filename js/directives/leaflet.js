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
        center: [40,-105],
        zoomControl: false ,
        zoom: 14
      })
      new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'sforsman1.6572c595',
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

      function onEachFeature (feature, layer) {
        layer.on({
          click: function (e) {
            window.location="/#/climbs/" + feature.id
          }
        })
      }
    }
  }
})





//
// map.on('click', function(e) {
//     alert(e.latlng); // e is an event object (MouseEvent in this case)
// });

      //
      // function onLocationFound(e) {
      //   var radius = e.accuracy / 2
      //
      //   L.marker(e.latlng).addTo(map)
      //       .bindPopup("You are within " + radius + " meters from this point").openPopup()
      //   L.circle(e.latlng, radius).addTo(map)
      //   console.log(e.latlng)
      // }
      //
      // function onLocationError(e) {
      //   alert(e.message)
      // }

      // map.on('locationerror', onLocationError);
