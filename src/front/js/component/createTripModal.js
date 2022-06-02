import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const CreateTripModal = ({ closeModal, createTrip, trip }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="modal fade show "
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-modal="true"
      style={{
        display: "block",
        backdropFilter: "brightness(20%)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Edit user
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                closeModal();
              }}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row text-center">
              <label htmlFor="destination" className="col-4">
                Destination
              </label>
              <input
                id="destination"
                className="col-5"
                onChange={(e) =>
                  createTrip({ ...trip, destination: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="date_of_the_trip" className="col-4">
                Date of the Trip
              </label>
              <input
                type="date"
                id="date_of_the_trip"
                className="col-5"
                onChange={(e) =>
                  createTrip({ ...trip, date_of_the_trip: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="people" className="col-4">
                People
              </label>
              <input
                id="people"
                className="col-5"
                onChange={(e) =>
                  createTrip({ ...trip, people: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="transport" className="col-4">
                Transport
              </label>
              <input
                id="transport"
                className="col-5"
                onChange={(e) =>
                  createTrip({ ...trip, transport: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="cost" className="col-4">
                Cost
              </label>
              <input
                id="cost"
                className="col-5"
                onChange={(e) => createTrip({ ...trip, cost: e.target.value })}
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="col-2 offset-1 btn btn-primary"
              onClick={() => {
                actions.createTrip(trip);
                closeModal();
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
