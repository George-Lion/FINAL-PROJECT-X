import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/createTripModal.css";

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
        <div className="modal-content bg-dark text-light">
          <div className="modal-header ">
            <h5 className="modal-title" id="staticBackdropLabel">
              Create Trip
            </h5>
            {/* close buttom */}
            <button
              type="button"
              className="btn-close bg-light"
              aria-label="Close"
              onClick={() => {
                closeModal();
              }}
            ></button>
          </div>

          {/* BANNER */}

          <div className="modal-body m-5">
            <div className="row text-center">
              <input
                type="file"
                className="custom-file-input3"
                onChange={(e) =>
                  createTrip({ ...trip, destination_picture: e.target.files[0] })
                }
              />
            </div>

            {/* DESTINATION */}

            <div className="row mb-2 mt-4">
              <label htmlFor="place" className="col-6">
                Destination
              </label>
              <input
                id="place"
                className="col-5"
                placeholder="Destination"
                maxLength={25}
                onChange={(e) =>
                  createTrip({
                    ...trip, destination: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></input>
            </div>

            {/* START TRIP */}

            <div className="row  mb-2">
              <label htmlFor="startTrip" className="col-6">
                Start of the trip
              </label>
              <input
                id="startTrip"
                type="date"
                className="col-5"
                placeholder="Start"
                onChange={(e) =>
                  createTrip({
                    ...trip, start_of_the_trip: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></input>
            </div>

            {/* END TRIP */}

            <div className="row  mb-2">
              <label htmlFor="endTrip" className="col-6">
                End of the trip
              </label>
              <input
                id="endTrip"
                type="date"
                required
                className="col-5"
                placeholder="End"
                onChange={(e) =>
                  createTrip({
                    ...trip, end_of_the_trip: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></input>
            </div>

            {/* PEOPLE */}

            <div className="row  mb-2">
              <label htmlFor="people" className="col-6">
                Travel buddies
              </label>
              <input
                type="number"
                id="people"
                className="col-5"
                placeholder="Travel buddies"
                onChange={(e) =>
                  createTrip({
                    ...trip, people: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></input>
            </div>

            {/* Transport */}

            <div className="row  mb-2">
              <label htmlFor="transport" className="col-6">
                Transport
              </label>
              <select
                name="transporte"
                className="col-5"
                placeholder="none"
                onChange={(e) =>
                  createTrip({
                    ...trip, transport: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              >
                <option>None</option>
                <option>Car</option>
                <option>Airplane</option>
                <option>Train</option>
                <option>Boat</option>
                <option>Bike</option>
                <option>Motorcycle</option>
              </select>
            </div>

            {/* COST */}

            <div className="row  mb-2">
              <label htmlFor="cost" className="col-6">
                Cost
              </label>
              <input
                type="number"
                max="9999"
                id="cost"
                className="col-5"
                placeholder="Cost"
                onChange={(e) =>
                  createTrip({
                    ...trip, cost: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></input>
            </div>

            {/* TEXT */}

            <h5>write a text</h5>
            <div className="input-group">
              <textarea
                name="contador"
                id="contador"
                className="form-control"
                aria-label="With textarea"
                maxLength={120}
                placeholder="Text"
                onChange={(e) =>
                  createTrip({
                    ...trip, text: e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></textarea>
            </div>
            {/* <p>{user.description.length}/120</p> */}
          </div>

          {/* Save buttom */}

          <div className="modal-footer">
            <button
              className="col-2 offset-1 btn btn-light"
              onClick={() => {
                actions.createTrip(trip);
                closeModal();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
