import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapView = ({ location }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMqD9bAiImGbZhOybqO6zuMzBk5JawQlA"
  });

  if (!isLoaded) return <p className="text-center">Loading map...</p>;
  if (!location) return null;

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <div className="w-full h-64 mt-4 rounded overflow-hidden shadow">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapView;