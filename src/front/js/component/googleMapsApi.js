import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
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
  const [lat, setLat] = useState(40.4303759999059);
  const [lng, setLng] = useState(-3.7049425337888837);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (store.trip.destination) {
      executeGeolocation();
    }
  }, [store.trip]);

  const executeGeolocation = async () => {
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en");
    Geocode.setRegion("es");
    Geocode.setLocationType("ROOFTOP");
    const response = await Geocode.fromAddress(store.trip.destination);
    setLat(response.results[0].geometry.location.lat);
    setLng(response.results[0].geometry.location.lng);
  };

  let count = React.useRef(0);
  const directionsCallback = (res) => {
    if (res !== null && count.current < 2) {
      if (res.status === "OK") {
        count.current += 1;
        setResponse(res);
      } else {
        count.current = 0;
      }
    }
  };

  const DirectionsServiceOption = {
    destination: store.trip.destination,
    origin: store.user.city_of_residence,
    travelMode: "DRIVING",
  };

  return (
    <>
      {store.trip ? (
        <GoogleMap
          zoom={13}
          center={{ lat, lng }}
          mapContainerStyle={{ width: "100%", height: "550px" }}
        >
          <Marker position={{ lat, lng }} />
          {response !== null && (
            <DirectionsRenderer
              options={{
                directions: response,
              }}
            />
          )}

          <DirectionsService
            options={DirectionsServiceOption}
            callback={directionsCallback}
          />
        </GoogleMap>
      ) : null}
    </>
  );
};
