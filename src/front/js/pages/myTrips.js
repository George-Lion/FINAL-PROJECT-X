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

  // useEffect(() => {
  //   if (store.match == "") {
  //     actions.getUserTrips();
  //   }
  // }, []);

  return (
    <Fragment>
      <div className="footer-abajo">
        {store.userTrips.length > 0 ? (
          <h1 className="text-center m-5">MY TRIPS</h1>
        ) : (
          <h3 className="text-center text-dark mt-4">No Trips</h3>
        )}
        {store.userTrips.map((trip) => {
          return (
            <div
              className="cardTrips col-4 m-4 rounded"
              style={{
                backgroundImage: "url(" + trip.destination_picture + ")",
              }}
              key={trip.id}
            >
              <Link to={"/trip/" + trip.id} style={{ textDecoration: "none" }}>
                <div className="my-4">
                  <div className="d-flex justify-content-center">
                    <h1 className="text-white">
                      <i className="fas fa-map-marker m-3"></i>
                      {trip.destination}
                    </h1>
                  </div>

                  <div className="flex-column mt-5">
                    <div className="col">
                      <span className="text-white">
                        <i className="fas fa-user-friends mt-2 me-2"></i>
                        {trip.people}
                      </span>
                    </div>

                    <div className="col">
                      <span className="text-white">
                        <i className="fa-solid fa-heart mt-2 me-2"></i>
                        {trip.likes.length}
                      </span>
                    </div>

                    <div className="col">
                      <span className="text-white">
                        <i className="fas fa-user-friends mt-2 me-2"></i>
                        {trip.transport}
                      </span>
                    </div>

                    <div className="col">
                      <p className="text-white">
                        <i className="fas fa-clock mt-2 me-2"></i>
                        {moment(trip.start_of_the_trip).format("LL")} -{" "}
                        {moment(trip.end_of_the_trip).format("LL")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
