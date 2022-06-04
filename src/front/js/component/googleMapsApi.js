import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../../styles/googlemapsapi.css";

export const GoogleMapsApi = ({ closeModal, createTrip, trip }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2VlvE2p5HBQ5muBOv6sLBebIuoI6MlCw",
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

const Map = () => {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 10.45, lng: -66.53 }}
      mapContainerStyle={{ width: "100%", height: "550px" }}
    >
      <Marker position={{ lat: 10.45, lng: -66.53 }} />
    </GoogleMap>
  );
};
