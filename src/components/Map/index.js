import React, { useState } from "react";
import Map, {Marker, Popup } from 'react-map-gl';
import { useParams } from "react-router-dom";

import trips from "../../data/trip.json";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./index.css";

function Index() {
    let params = useParams();
    const [viewState, setViewState] = useState({
        latitude: 36.06929455259827,
        longitude: 140.09980531957265,
        zoom: 10
      });
    const currentLocation = trips.features.find(o => o.properties.PARK_ID === parseInt(params.id));
    const [selectedPark, setSelectedPark] = useState({});

    return (
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{width: 800, height: 600}}  
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
        {/* usimg marker you can show data onto the location such as name of place,img etc */}

        <Marker
            key={currentLocation.properties.PARK_ID}
            latitude={currentLocation.geometry.coordinates[0]}
            longitude={currentLocation.geometry.coordinates[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                setSelectedPark(currentLocation);
              }}
            >
              <img src="/skateboarding.svg" alt="Skate Park Icon" />
            </button>
          </Marker>

        {selectedPark.properties &&   (
          <Popup
            latitude={selectedPark.geometry.coordinates[0]}
            longitude={selectedPark.geometry.coordinates[1]}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}

       </Map>     
    );
}
export default Index;