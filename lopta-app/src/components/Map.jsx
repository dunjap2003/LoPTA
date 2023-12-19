import '@tomtom-international/web-sdk-maps/dist/maps.css'; // Import the CSS styles for the maps
import { useState, useEffect, useRef } from "react";
import tt from '@tomtom-international/web-sdk-maps'; // Import the TomTom Maps SDK
import ad from '@tomtom-international/web-sdk-services'; // Import the TomTom Maps SDK
import JourneyRoute from './JourneyRoute';

function Map() {
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(-0.118092 || 0); // Providing a default value of 0 if null is encountered
    const [mapLatitude, setMapLatitude] = useState(51.50000 || 0); // Providing a default value of 0 if null is encountered
    const [map, setMap] = useState(null);
    const [markers, setMarker] = useState([]);
    const [allPoints, setAllPoints] = useState([]);

    const updateLongitude = (value) => {
        setMapLongitude((value));

    };

    const updateLatitude = (value) => {

        setMapLatitude((value));

    };

    const updateMap = () => {
        map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
        map.setZoom(10);
    };

    let data;
    const getCoordinates = async () => {
        try {
            const response = await fetch("http://localhost:8000/predict");
            data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const initializeMap = async () => {
            try {
                console.log("Initializing map...");
                const mapInstance = tt.map({
                    key: "aLgQNoPtQzJe5nGzbNocRvlSyQEjlOF4",
                    container: mapElement.current,
                    center: [mapLongitude, mapLatitude],
                    zoom: 10
                });

                if (mapInstance) {
                    console.log("Map instance created:", mapInstance);
                    setMap(mapInstance);
                } else {
                    console.error("Map instance not created");
                }
            } catch (error) {
                console.error("Map initialization error:", error);
            }
        };

        if (mapElement.current) {
            initializeMap();
        } else {
            console.warn("Map element not found");
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [mapLongitude, mapLatitude]);

    useEffect(() => {
        if (map) {
            getCoordinates();
            console.log("data " + data);
            const clickHandler = function (e) {
                setMarker(prevMarkers => {
                    const newMarker = new tt.Marker().setLngLat(e.lngLat).addTo(map);
                    console.log(newMarker);
                    const updatedMarkers = [...prevMarkers, newMarker];
                    console.log("Updated markers are: ", updatedMarkers);
                    return updatedMarkers;
                });
            };

            map.on('click', clickHandler);

            return () => {
                map.off('click', clickHandler); // Clean up the event listener
            };
        }
    }, [map]);


    const displayRoute = (geoJson) => {
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': geoJson
            },
            'paint': {
                'line-color': '#4a90e2',
                'line-width': 6
            }
        })

    }

    const createRoute = async () => {
        try {
            if (markers.length === 0) {
                console.log("No markers to create a route");
                return;
            }

            const routeOptions = {
                key: 'aLgQNoPtQzJe5nGzbNocRvlSyQEjlOF4',
                locations: markers.map((marker) => marker.getLngLat()),
                travelMode: 'car'
            };

            const routeData = await ad.services.calculateRoute(routeOptions);
            if (routeData) {
                console.log(routeData);
                const geoJson = routeData.toGeoJson();
                displayRoute(geoJson);
                // Handle the route data or state update here
                const allPointsData = [];
                routeData.routes[0].legs[0].points.forEach(point => {
                    allPointsData.push(point);
                });
                console.log(allPointsData);
                setAllPoints(allPointsData);
            } else {
                console.error("Error calculating route: Invalid route data");
            }
        } catch (error) {
            console.error("Error calculating route:", error);
        }
    };

    const onRouteCreate = () => {
        createRoute();
    };

    return (
        <>
            <div className="flex items-center w-full">
                <JourneyRoute onRouteCreate={onRouteCreate} />
                <div className="Map">
                    <div className="pt-16 pl-10 container w-full h-120 flex justify-center items-center">
                        <div className="w-full h-96 shadow-2xl flex flex-col justify-center items-center">
                            <div ref={mapElement} className="mapDiv w-full h-full" style={{ width: '600px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Map;