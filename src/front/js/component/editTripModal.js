import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/editTripModal.css";

export const EditTripModal = ({ closeModal, editTrip, trip }) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  return (
    <div>
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
          <div className="trip-modal modal-content text-light">
            <div className="modal-header ">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Trip
              </h5>
            </div>

            {/* Banner */}

            <div className="modal-body m-5">
              <div className="row text-center">
                <input
                  type="file"
                  onChange={(e) =>
                    editTrip({
                      ...trip,
                      destination_picture: e.target.files[0],
                    })
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
    </div>
  );
};
