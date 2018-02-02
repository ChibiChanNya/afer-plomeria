// Google Map --- https://developers.google.com/maps/documentation/javascript/
let GoogleMap = function () {
    "use strict";

    let handleGoogleMaps = function () {

        function initialize() {
            // Specify features and elements to define styles.
            let styleArray = [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8ec3b9"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1a3646"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4b6878"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#64779e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4b6878"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#334e87"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#023e58"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#283d6a"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#6f9ba5"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#023e58"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3C7680"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#304a7d"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#98a5be"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2c6675"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#255763"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b0d5ce"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#023e58"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#98a5be"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#283d6a"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3a4762"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0e1626"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#4e6d70"
                        }
                    ]
                }
            ];

            // Create a map object and specify the DOM element for display.
            let TILE_SIZE = 256;

            let afer = new google.maps.LatLng(28.6185674, -106.0206756,);

            let map = new google.maps.Map(document.getElementById('map'), {
                center: afer,
                styles: styleArray,
                scrollwheel: false,
                zoom: 15,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: false,
                scaleControl: false
            });

            let icon = {
                url: "http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png", // url
                scaledSize: new google.maps.Size(30, 30), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            let marker = new google.maps.Marker({
                position: afer,
                map: map,
                icon: icon
            });

            function createInfoWindowContent(latLng, zoom) {
                let scale = 1 << zoom;

                let worldCoordinate = project(latLng);

                let pixelCoordinate = new google.maps.Point(
                    Math.floor(worldCoordinate.x * scale),
                    Math.floor(worldCoordinate.y * scale));

                let tileCoordinate = new google.maps.Point(
                    Math.floor(worldCoordinate.x * scale / TILE_SIZE),
                    Math.floor(worldCoordinate.y * scale / TILE_SIZE));

                //Afer Plomería Especializada, Blvd. J. Fuentes Mares 9802, Juárez, 31064 Chihuahua, Chih.
                return [
                    'Blvd. J. Fuentes Mares 9802, <br>Col. Villa Juárez, 31064, <br>  Chihuahua, Chih.'
                ].join('<br>');
            }

            let coordInfoWindow = new google.maps.InfoWindow();
            coordInfoWindow.setContent(createInfoWindowContent(afer, map.getZoom()));
            coordInfoWindow.setPosition(afer);
            coordInfoWindow.open(map);

            map.addListener('zoom_changed', function () {
                coordInfoWindow.setContent(createInfoWindowContent(afer, map.getZoom()));
                coordInfoWindow.open(afer);
            });



            // The mapping between latitude, longitude and pixels is defined by the web
            // mercator projection.
            function project(latLng) {
                let siny = Math.sin(latLng.lat() * Math.PI / 180);

                // Truncating to 0.9999 effectively limits latitude to 89.189. This is
                // about a third of a tile past the edge of the world tile.
                siny = Math.min(Math.max(siny, -0.9999), 0.9999);
                return new google.maps.Point(
                    TILE_SIZE * (0.5 + latLng.lng() / 360),
                    TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
            }
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    };

    return {
        init: function () {
            handleGoogleMaps(); // initial setup for google map
        }
    }
}();

$(document).ready(function () {
    GoogleMap.init();
});