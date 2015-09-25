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
        center: [40,-105.38],
        zoomControl: false ,
        zoom: 13
      })
      new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          maxZoom: 18,
          id: id,
          accessToken: token
      }).addTo(map);

      var areaIcon = L.icon({
        iconUrl: '/images/marker.png',
        iconSize:     [31.5, 35], // size of the icon
        iconAnchor:   [15, 20], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76]
      });

      var geojsonLayer = L.geoJson(scope.data, {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, latlng) {
          return L.marker(latlng, {
              icon: areaIcon
          })
        }
      }).addTo(map)


      // geojsonLayer.featureLayer(geojson, {
      //   pointToLayer: function(feature, latlon) {
      //       return L.marker(latlng, {icon: '/images/marker.png' });
      //   }
      // }).addTo(map);

      // var points = L.geoJson(labels, {
      //   pointToLayer: function (feature, latlng) {
      //       return L.marker(latlng, {icon: crossIcon });
      //   }
      // });
      //
      // geojsonLayer.data.setStyle(function(feature) {
      //   console.log('feature', feature)
      //   //  return '/images/marker.png'
      //  });
      // var myIcon = L.icon({
      //     iconUrl: '/images/marker.png',
      //     iconRetinaUrl: 'my-icon@2x.png',
      //     iconSize: [38, 95],
      //     iconAnchor: [22, 94],
      //     popupAnchor: [-3, -76],
      //     shadowSize: [68, 95],
      //     shadowAnchor: [22, 94]
      // });
      //
      // L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
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
