import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.css";
import moment from "moment";
import { Link } from "react-router-dom";

export const MyTrips = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getUserTrips();
  }, []);

  return (
    <>
      {store.userTrips.map((trip) => {
        return (
          <div key={trip.id}>
            <h1>{trip.destination}</h1>;<h1>{trip.people}</h1>;
            <h1>{trip.transport}</h1>;
            <h1 className="features">
              <i className="icon-image icon fas fa-clock"></i>
              {moment(store.trip.start_of_the_trip).format("LL")} -{" "}
              {moment(store.trip.end_of_the_trip).format("LL")}
            </h1>
          </div>
        );
      })}
    </>
  );
};
