import '@tomtom-international/web-sdk-maps/dist/maps.css'; // Import the CSS styles for the maps
import { useState, useEffect, useRef } from "react";
import tt from '@tomtom-international/web-sdk-maps'; // Import the TomTom Maps SDK
import ad from '@tomtom-international/web-sdk-services'; // Import the TomTom Maps SDK

function Map({ calculateButton, finalData }) {
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(-0.118092 || 0); // Providing a default value of 0 if null is encountered
    const [mapLatitude, setMapLatitude] = useState(51.50000 || 0); // Providing a default value of 0 if null is encountered
    const [map, setMap] = useState(null);
    const [markers, setMarker] = useState([]);
    const [allPoints, setAllPoints] = useState([]);
    const [final, setFinal] = useState(null);

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

    useEffect(() => {
        const initializeMap = async () => {
            try {
                console.log("Initializing map...");
                const mapInstance = tt.map({
                    key: "UyWxGSKraEMZF3wJTgMb4pHLKgpYGnOb",
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

    useEffect(() => {
        createRoute();
    }, [calculateButton]);

    useEffect(() => {
        console.log("final dataaa: ", finalData);
        setFinal(finalData);
    }, [finalData]);
    
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
            let routeOptions;
            if (!finalData) {
                console.error("finalData is null or undefined");
            }

            if (finalData.checkbox === false) {
                routeOptions = {
                    key: 'UyWxGSKraEMZF3wJTgMb4pHLKgpYGnOb',
                    locations: markers.map((marker) => marker.getLngLat()),
                    travelMode: 'car'
                };  
                
                console.log("lokacije: ", routeOptions.locations);
            }
            else{
                setMarker(prevMarkers => {
                    const startingMarker = new tt.Marker().setLngLat(finalData.starting).addTo(map);
                    const updatedMarkers = [...prevMarkers, startingMarker];
                    return updatedMarkers;
                });
                setMarker(prevMarkers => {
                    const finalMarker = new tt.Marker().setLngLat(finalData.destination).addTo(map);
                    const updatedMarkers = [...prevMarkers, finalMarker];
                    return updatedMarkers;
                });
                routeOptions = {
                    key: 'UyWxGSKraEMZF3wJTgMb4pHLKgpYGnOb',
                    locations: [finalData.starting, finalData.destination],
                    travelMode: 'car'
                }
            }
            if (markers.length === 0) {
                console.log("No markers to create a route");
                return;
            }
            const routeData = await ad.services.calculateRoute(routeOptions);
            if (routeData) {
                console.log("route data ", routeData);
                const geoJson = routeData.toGeoJson();
                displayRoute(geoJson);
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

    useEffect(() => {
        createRoute();
    }, [markers]);
      
    return (
        <>
            <div className="flex items-center w-full">
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