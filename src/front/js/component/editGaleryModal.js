import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const EditGaleryModal = ({ closeModal, editTrip, trip }) => {
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
                            Add imagens
                        </h5>
                    </div>
                    <div className="modal-body m-5">

                        {/* PRUEBA */}

                        <div className="row text-center">
                            <input
                                type="file"
                                onChange={(e) =>
                                    editTrip({ ...trip, imagen_1: e.target.files[0] })
                                }
                            />
                        </div>

                        <div className="row text-center">
                            <input
                                type="file"
                                onChange={(e) =>
                                    editTrip({ ...trip, imagen_2: e.target.files[0] })
                                }
                            />
                        </div>

                        <div className="row text-center">
                            <input
                                type="file"
                                onChange={(e) =>
                                    editTrip({ ...trip, imagen_3: e.target.files[0] })
                                }
                            />
                        </div>

                        <div className="row text-center">
                            <input
                                type="file"
                                onChange={(e) =>
                                    editTrip({ ...trip, imagen_4: e.target.files[0] })
                                }
                            />
                        </div>

                        <div className="row text-center">
                            <input
                                type="file"
                                onChange={(e) =>
                                    editTrip({ ...trip, imagen_5: e.target.files[0] })
                                }
                            />
                        </div>

                        {/* Save buttom */}
                        <div className="modal-footer d-flex justify-content-between px-5">
                            <div>
                                <button
                                    className="btn btn-light me-3"
                                    onClick={() => {
                                        closeModal();
                                    }}
                                >
                                    Close
                                </button>
                                <button
                                    className="btn btn-light"
                                    onClick={async () => {
                                        await actions.editTrip(trip);
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};
