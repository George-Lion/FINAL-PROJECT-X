import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const EditTripModal = ({ closeModal, editTrip, trip }) => {
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
              Edit Trip
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
          {/* Banner */}
          <div className="modal-body m-5">
            <div className="row text-center">
              <input
                type="file"
                onChange={(e) =>
                  editTrip({ ...trip, destination_picture: e.target.files[0] })
                }
              />
            </div>
            {/* Destination */}
            <div className="row text-center mb-2 mt-4">
              <label htmlFor="place" className="col-6">
                Destination
              </label>
              <input
                defaultValue={trip.destination}
                id="place"
                className="col-5"
                placeholder="Destination"
                maxLength={25}
                onChange={(e) =>
                  editTrip({
                    ...trip,
                    destination:
                      e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  })
                }
              ></input>
            </div>
            {/* start trip */}
            <div className="row text-center mb-2">
              <label htmlFor="startTrip" className="col-6">
                Start of the trip
              </label>
              <input
                defaultValue={trip.start_of_the_trip}
                id="startTrip"
                type="date"
                className="col-5"
                placeholder="Start"
                onChange={(e) =>
                  editTrip({ ...trip, start_of_the_trip: e.target.value })
                }
              ></input>
            </div>
            {/* end trip */}
            <div className="row text-center mb-2">
              <label htmlFor="endTrip" className="col-6">
                End of the trip
              </label>
              <input
                defaultValue={trip.end_of_the_trip}
                id="endTrip"
                type="date"
                required
                className="col-5"
                placeholder="End"
                onChange={(e) =>
                  editTrip({ ...trip, end_of_the_trip: e.target.value })
                }
              ></input>
            </div>
            {/* people */}
            <div className="row text-center mb-2">
              <label htmlFor="people" className="col-6">
                Travel buddies
              </label>
              <input
                type="number"
                defaultValue={trip.people}
                id="people"
                className="col-5"
                placeholder="Travel buddies"
                onChange={(e) => editTrip({ ...trip, people: e.target.value })}
              ></input>
            </div>
            {/* Transport */}
            <div className="row text-center mb-2">
              <label htmlFor="transport" className="col-6">
                Transport
              </label>
              <select
                name="transporte"
                className="col-5"
                placeholder="none"
                defaultValue={trip.transport}
                onChange={(e) =>
                  editTrip({ ...trip, transport: e.target.value })
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
            {/* Cost */}
            <div className="row text-center mb-2">
              <label htmlFor="cost" className="col-6">
                Cost
              </label>
              <input
                defaultValue={trip.cost}
                type="number"
                max="9999"
                id="cost"
                className="col-5"
                placeholder="Cost"
                onChange={(e) => editTrip({ ...trip, cost: e.target.value })}
              ></input>
            </div>
            {/* Text */}
            <p>Description of the trip:</p>
            <div className="input-group">
              <textarea
                defaultValue={trip.text}
                name="contador"
                id="contador"
                className="form-control"
                aria-label="With textarea"
                maxLength={220}
                placeholder="Text"
                onChange={(e) => editTrip({ ...trip, text: e.target.value })}
              ></textarea>
            </div>
            <p>{trip.text ? trip.text.length : 0}/220</p>
          </div>
          {/* Save buttom */}
          <div className="modal-footer">
            <button
              className="col-2 offset-1 btn btn-light"
              onClick={async () => {
                await actions.editTrip(trip);
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
