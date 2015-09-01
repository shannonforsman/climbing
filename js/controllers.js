//
// var markers = {
//   taipei: {
//       lat: 40.0293099,
//       lng: -105.2399774,
//       data: 'hey',
//       layer: 'red',
//       properties : {
//         "rentals": true,
//         "tackleshop": false,
//         "fuel": false,
//         "marker-color": "#1087bf",
//         "marker-size": "large",
//         "marker-symbol": "harbor"
//       }
//   },
//   blah: {
//       lat: 40.04,
//       lng: -105.2399774,
//       data: 'blah',
//       layer: 'blue',
//       properties : {
//         "rentals": false,
//         "tackleshop": false,
//         "fuel": false,
//         "marker-color": "#1087bf",
//         "marker-size": "large",
//         "marker-symbol": "harbor"
//       }
//   },
// }


var geojson = [
    {
      "type": "Feature",
      "geometry": {
        "coordinates": [-104.99404, 39.75621],
        "type": "Point"
      },
      "properties": {
        "rentals": false,
        "foo": false
      },
    },
    {
      "type": "Feature",
      "geometry": {
        "coordinates": [-104.99404, 39.77621],
        "type": "Point"
      },
      "properties": {
        "rentals": false,
        "foo" : true
      }
    }
];




app.controller("MapController", [ '$scope', 'leafletEvents', 'leafletData', function($scope, leafletEvents, leafletData) {


  leafletData.getMap().then(function(map) {


      L.geoJson(geojson, {
        filter: function(feature, layer) {
          console.log(feature.properties)
        return feature.properties.foo
        }
      }).addTo(map);

        // $scope.markers = geojson
        // console.log(map)
      })
  //
  //     // map.on('filter:filter', function (e) {
  //     //     console.log(e);
  //     // });
  // });
      $scope.geojson = geojson
      $scope.tiles = {
        name: 'Climbing',
        url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
        type: 'xyz',
        options: {
            apikey: 'pk.eyJ1Ijoic2ZvcnNtYW4xIiwiYSI6InhNQTZTSEUifQ.HQMF5-AuRCoJOKk2Vt7mlw',
            mapid: 'sforsman1.na9fn83i'
        }
      }

        $scope.osloCenter =  {
            lat: 39.77621,
            lng: -104.99404,
            zoom: 12
        }



    // console.log(leafletData.getMap())
    // $scope.newMarkers = markers
    // $scope.filter = function(filter) {
    //   var obj = {}
    //   for (var key in markers) {
    //     if (markers[key].properties.rentals) {
    //       obj[key] = markers[key]
    //     }
    //   }
    //   $scope.newMarkers = obj
    //   console.log($scope.newMarkers)
    // }
    // $scope.$watch('newMarkers', function(newValue, oldValue) {
    //   console.log('watch oldvalue', oldValue)
    //   console.log('watch newvalue',newValue)
    //
    //   oldValue = newValue
    // });
    // angular.extend($scope, {
    //     osloCenter: {
    //         lat: 40.0293099,
    //         lng: -105.2399774,
    //         zoom: 12
    //     },
    //     layers: {
    //       overlays: {
    //         red: {
    //             type: 'group',
    //             name: 'red',
    //             visible: true
    //         },
    //
    //         blue: {
    //             type: 'group',
    //             name: 'blue',
    //             visible: true
    //         }
    //       }
    //     },
    //     tiles: {
    //       name: 'Climbing',
    //       url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
    //       type: 'xyz',
    //       options: {
    //           apikey: 'pk.eyJ1Ijoic2ZvcnNtYW4xIiwiYSI6InhNQTZTSEUifQ.HQMF5-AuRCoJOKk2Vt7mlw',
    //           mapid: 'sforsman1.na9fn83i'
    //       }
    //     },
    //     markers: $scope.newMarkers,
    //     events: {
    //       markers: {
    //         enable: leafletEvents.getAvailableMarkerEvents(),
    //       }
    //     },
    //     // toggleLayer: function(type) {
    //     //   $scope.layers.overlays[type].visible = !$scope.layers.overlays[type].visible;
    //     // }
    // });
    // $scope.eventDetected = "No events yet...";
    //   var markerEvents = leafletEvents.getAvailableMarkerEvents();
    //   var click = 'leafletDirectiveMarker.' + markerEvents[0];
    //   $scope.$on(click, function(event, args){
    //       var modal = document.getElementById('modal')
    //       modal.innerHTML = ''
    //       modal.innerHTML = args.model.data
    //       console.log(args)
    //   });
    //
    //   document.body.addEventListener('click', function(e) {
    //     if (e.target.dataset) {
    //       var filter = e.target.dataset.filter
    //
    //       console.log(filter)
    //       // $scope.markers.setFilter(function(f) {
    //       //   return (filter === 'all') ? true : f.properties[filter] === true;
    //       // })
    //       return false;
    //     }
    //   })
}]);



// $('.menu-ui a').on('click', function() {
//     // For each filter link, get the 'data-filter' attribute value.
//     var filter = $(this).data('filter');
//     $(this).addClass('active').siblings().removeClass('active');
//     markers.setFilter(function(f) {
//         // If the data-filter attribute is set to "all", return
//         // all (true). Otherwise, filter on markers that have
//         // a value set to true based on the filter name.
//         return (filter === 'all') ? true : f.properties[filter] === true;
//     });
//     return false;
// });
