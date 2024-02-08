"use client";
import React from "react";
import {
  APIProvider,
  AdvancedMarker,
  ControlPosition,
  Map,
  MapControl,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";
const Googlemap = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <APIProvider apiKey={`AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s`}>
        <Map
          //   initialViewState={{
          //     latitude: 53.54992,
          //     longitude: 10.00078,
          //     zoom: 3,
          //   }}
          zoom={12}
          center={{ lat: 53.54992, lng: 10.00678 }}
          gestureHandling={"greedy"}
          //   disableDefaultUI={true}
        >
          {/* <Marker position={{ lat: 53.54992, lng: 10.00678 }} /> */}
          <AdvancedMarker position={{ lat: 53.54992, lng: 10.00678 }}>
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </AdvancedMarker>
          {/* <MapControl position={ControlPosition.TOP_LEFT}>
            .. any component here will be added to the control-containers of the */}
          {/* google map instance .. */}
          {/* </MapControl> */}
        </Map>
      </APIProvider>
    </div>
  );
};

export default Googlemap;
