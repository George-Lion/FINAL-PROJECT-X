import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/changeBannerModal.css";

export const ChangeBannerModal = ({ closeModal, editUser, user }) => {
  const { store, actions } = useContext(Context);
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      editUser({ ...user, banner_picture: e.target.files[0] }),
        setSelectedImage(e.target.files[0]);
    }
  };

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
        backdropFilter: "blur(3px) brightness(40%)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="banner-modal modal-content text-light">
          <div className="modal-header">
            <h4 className="modal-title" id="staticBackdropLabel">
              Select a picture
            </h4>
            {/* CLOSE BUTTON */}
            <i
              type="button"
              className="close-photo far fa-times-circle"
              aria-label="Close"
              onClick={() => {
                closeModal();
              }}
            ></i>
          </div>
          <div className="">
            <div className="">

              <div
                className="">

                <img className="banner-min" src={selectedImage == undefined ? store.profile.banner_picture : URL.createObjectURL(selectedImage)} alt="img" />
              </div>

              {/* COVER & PROFILE PICTURE*/}

              <div className="content-cover mb-3">
                <label className="">
                  <input
                    className="custom-file-input"
                    type="file"
                    onChange={imageChange}
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
