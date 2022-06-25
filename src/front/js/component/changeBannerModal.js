import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/changeBannerModal.css";

export const ChangeBannerModal = ({ closeModal, editUser, user }) => {
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
        <div className="user-modal modal-content text-light">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Select a picture
            </h5>
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="btn-close bg-light"
              aria-label="Close"
              onClick={() => {
                closeModal();
              }}
            ></button>
          </div>
          <div className="row m-4">
            <div className="row">

              {/* COVER & PROFILE PICTURE*/}

              <div className="row mb-3">
                <label className="col-6">
                  <input
                    className="custom-file-input2"
                    type="file"
                    onChange={(e) =>
                      editUser({ ...user, banner_picture: e.target.files[0] })
                    }
                  />
                </label>
              </div>
            </div>

            {/* SAVE BUTTON */}

            <div className="modal-footer">
              <button
                className="col-2 offset-1 btn btn-light"
                onClick={() => {
                  actions.editUser(user);
                  closeModal();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
