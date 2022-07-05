import * as React from 'react';
import Map,{Marker} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';



function App() {

    const token ="pk.eyJ1IjoiZGlhbmEwMjEwIiwiYSI6ImNsNTdhbmY1NjFxbHAzY3FxZDF0bXVwYTEifQ.cZiBDPYd-SibVrMhuHlqWA";
  return (
    <div>
      <h1>This map</h1>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={token}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
   
    </div>
  );
}

export default App;
