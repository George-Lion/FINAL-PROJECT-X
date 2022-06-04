import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams, Link } from "react-router-dom";
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
  const { id } = useParams();
  const [value, setvalue] = useState(store.trip.destination);
  const location = { lat: 10.45, lng: -66.53 };
  const [trip, setTrip] = useState({});

  useEffect(() => {
    actions.getTrip(id);
  }, []);

  useEffect(() => {
    setTrip(store.trip);
  }, [store.trip]);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  Geocode.fromAddress("Madrid").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <>
      <GoogleMap
        zoom={10}
        center={location}
        mapContainerStyle={{ width: "100%", height: "550px" }}
      >
        <Marker position={location} />
      </GoogleMap>
    </>
  );
};
