import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/changePhotoModal.css";

export const ChangePhotoModal = ({ closeModal, editUser, user }) => {
  const { store, actions } = useContext(Context);
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      editUser({ ...user, profile_picture: e.target.files[0] }),
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
        <div className="user-modal modal-content text-light">
          <div className="modal-header">
            <h4 className="modal-title" id="staticBackdropLabel">
              Profile picture
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
          <div className="mt-3">
            <div className="row">
              {/*PROFILE PICTURE*/}

              <section className="user-pi">
                <div className="modal-pi">
                  <img
                    className="modal-pic"
                    src={
                      selectedImage == undefined
                        ? store.profile.profile_picture
                        : URL.createObjectURL(selectedImage)
                    }
                    alt="img"
                  />
                </div>
                <div className="modal-bt">
                  <label htmlFor="file" className="mx-auto">
                    <>
                      <div className="input-image">
                        <input
                          className="custom-file-input2"
                          accept="image/*"
                          type="file"
                          onChange={imageChange}
                        />
                      </div>
                    </>
                  </label>
                </div>
              </section>
            </div>

            {/* SAVE BUTTON */}

            <div className="modal-footer">
              <button
                className="save-changes"
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
