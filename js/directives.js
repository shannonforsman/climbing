app.directive('leafletDirective', ['ClimbInfo', function (ClimbInfo) {
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
        center: [40.018228,-105.2864265],
        zoom: 14
      })

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

      // var modal = document.getElementById('modal')

      function onEachFeature (feature, layer) {
        layer.on({
          click: function (e) {
            ClimbInfo.post({ _id: feature._id})
            .then(function (climbInfo) {
              console.log('climbInfo', climbInfo)
            })
          }
        })
      }
    }
  }
}])


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
