import React, { Fragment, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/myTrips.css";
import moment from "moment";
import { Link } from "react-router-dom";

export const MyTrips = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    if (store.trip) {
      actions.getUserTrips();
    }
  }, []);

  return (
    <Fragment>
      <div className="footer-abajo">
        <div className="content-mytrips mt-5 pt-1">
          {store.userTrips.length > 0 ? (
            <h2 className="title-myTrips text-center mt-4">MY TRIPS</h2>
          ) : (
            <h3 className="text-center text-white mt-4">No Trips</h3>
          )}
          <div className="box-mytrips">
            <div className="content-trips">
              {store.userTrips.map((trip) => {
                return (
                  <Link to={"/trip/" + trip.id} key={trip.id} style={{ textDecoration: "none" }}>
                    <div className="card-trip" style={{ backgroundImage: "url(" + trip.destination_picture + ")" }}>
                      <div className="text-mytrips text-white">
                        <h2>{trip.destination}</h2>
                        <p><i className="fas fa-user-friends mt-2 me-2"></i>
                          {trip.people}</p>
                        <p><i className="fas fa-user-friends mt-2 me-2"></i>
                          {trip.transport}</p>
                        <p> <i className="fas fa-clock mt-2 me-2"></i>
                          {moment(trip.start_of_the_trip).format("LL")} -{" "}
                          {moment(trip.end_of_the_trip).format("LL")}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
