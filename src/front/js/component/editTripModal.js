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
                    <div className="modal-header">
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
                    <div className="modal-body m-5 ">
                        <div className="row text-center">
                            <input
                                type="file" onChange={(e) =>
                                    editTrip({ ...trip, destination_picture: e.target.files[0] })
                                }
                            />
                            {/* Destination */}
                            <label htmlFor="place" className="col-6">
                                Destination
                            </label>
                            <input
                                defaultValue={store.trip.destination}
                                id="place"
                                className="col-5" onChange={(e) =>
                                    editTrip({ ...trip, destination: e.target.value })
                                }
                            ></input>
                        </div>
                        {/* start trip */}
                        <div className="row text-center">
                            <label htmlFor="startTrip" className="col-6">
                                Start of the trip
                            </label>
                            <input
                                defaultValue={store.trip.start_of_the_trip}
                                id="startTrip"
                                className="col-5" onChange={(e) =>
                                    editTrip({ ...trip, destination: e.target.value })
                                }
                            ></input>
                        </div>
                        {/* end trip */}
                        <div className="row text-center">
                            <label htmlFor="endTrip" className="col-6">
                                End of the trip
                            </label>
                            <input
                                defaultValue={store.trip.end_of_the_trip}
                                id="endTrip"
                                className="col-5"
                            ></input>
                        </div>
                        {/* people */}
                        <div className="row text-center">
                            <label htmlFor="people" className="col-6">
                                Travel buddies
                            </label>
                            <input
                                defaultValue={store.trip.people}
                                id="people"
                                className="col-5"
                                onChange={(e) =>
                                    editTrip({ ...trip, people: e.target.value })
                                }
                            ></input>
                        </div>
                        {/* Transport */}
                        <div className="row text-center">
                            <label htmlFor="transport" className="col-6">
                                Transport
                            </label>
                            <input
                                defaultValue={store.trip.transport}
                                id="transport"
                                className="col-5" onChange={(e) =>
                                    editTrip({ ...trip, transport: e.target.value })
                                }
                            ></input>
                        </div>
                        {/* Cost */}
                        <div className="row text-center">
                            <label htmlFor="cost" className="col-6">
                                Cost
                            </label>
                            <input
                                defaultValue={store.trip.cost}
                                id="cost"
                                className="col-5" onChange={(e) =>
                                    editTrip({ ...trip, cost: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>
                    {/* Save buttom */}
                    <div className="modal-footer">
                        <button
                            className="col-2 offset-1 btn btn-light" onClick={async () => {
                                await actions.editTrip(trip);
                                closeModal();
                            }}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};