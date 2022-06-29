import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/changePhotoModal.css";

export const ChangePhotoModal = ({ closeModal, editUser, user }) => {
  const { store, actions } = useContext(Context);
  const [selectedImage, setSelectedImage] = useState();
  const ref = useRef();

  const imageChange = (e) => {

    if (e.target.files && e.target.files.length > 0) {
      editUser({ ...user, profile_picture: e.target.files[0] }),
        setSelectedImage(e.target.files[0])
    }
  };

  const removeSelectedImage = () => {
    ref.current.value = null;
    editUser();
    setSelectedImage();

  };

  const reset = () => {
    ref.current.value = null;

  };


  const styles = {

    preview: {
      display: "flex",
      flexDirection: "column",
      zIndex: "2"
    },
    image: { width: "150px", height: "150px" },
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
        backdropFilter: "brightness(20%)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="user-modal modal-content text-light">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Change photo
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

              <section className="user-pi">
                <div className="modal-pi">
                  <img className="modal-pic" src={selectedImage == undefined ? store.profile.profile_picture : URL.createObjectURL(selectedImage)} alt="img" />
                  {selectedImage && (
                    <div style={styles.preview}>
                      <button className="delete-button" onClick={() => { removeSelectedImage() }}>
                        Remove This Images
                      </button>
                    </div>
                  )}
                </div>
                <div className="modal-bt">
                  <label htmlFor="file" className="mx-auto">
                    <>
                      <div className="input-image">
                        <input
                          accept="image/*"
                          type="file"
                          onChange={imageChange}
                          ref={ref}
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
