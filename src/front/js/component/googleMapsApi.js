import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import "../../styles/googlemapsapi.css";

export const GoogleMapsApi = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

const Map = () => {
  const { store, actions } = useContext(Context);
  const [lat, setLat] = useState({ lat: lat });
  const [lng, setLng] = useState({ lng: lng });

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  Geocode.fromAddress(store.googleMapTrip.destination).then(
    (response) => {
      setLat(response.results[0].geometry.location.lat);
      setLng(response.results[0].geometry.location.lng);
      console.log(lat, lng, "@@@@@@@@@@@@@@@@@@@");
      console.log(response);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat, lng }}
        mapContainerStyle={{ width: "100%", height: "550px" }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </>
  );
};
