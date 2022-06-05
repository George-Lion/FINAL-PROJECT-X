import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/editProfileModal.css";

export const EditProfileModal = ({ closeModal, editUser, user }) => {
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
              EDIT PROFILE
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
          <div className="row text-center mb-2 mt-4 m-4">
            <div className="row text-center">

              {/* USERNAME */}

              <div className="row text-center mb-2 mt-4">
                <label htmlFor="username" className="col-6">
                  Username
                </label>
                <input
                  defaultValue={store.user.username}
                  id="username"
                  className="col-5"
                  placeholder="Username"
                  onChange={(e) =>
                    editUser({ ...user, username: e.target.value })
                  }
                ></input>
              </div>

              {/* FIRST NAME */}

              <div className="row text-center mb-2">
                <label htmlFor="firstname" className="col-6">
                  First Name
                </label>
                <input
                  defaultValue={store.user.firstname}
                  id="firstname"
                  className="col-5"
                  placeholder="First Name"
                  onChange={(e) =>
                    editUser({
                      ...user,
                      firstname:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>
              </div>

              {/* LAST NAME */}

              <div className="row text-center mb-2">
                <label htmlFor="lastname" className="col-6">
                  Last Name
                </label>
                <input
                  defaultValue={store.user.lastname}
                  id="lastname"
                  className="col-5"
                  placeholder="Last Name"
                  onChange={(e) =>
                    editUser({
                      ...user,
                      lastname:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>
              </div>

              {/* CITY */}

              <div className="row text-center mb-2">
                <label htmlFor="city_of_residence" className="col-6">
                  City
                </label>
                <input
                  defaultValue={store.user.city_of_residence}
                  id="city_of_residence"
                  className="col-5"
                  placeholder="City of residence"
                  onChange={(e) =>
                    editUser({
                      ...user,
                      city_of_residence:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>
              </div>

              {/* COUNTRY */}

              <div className="row text-center mb-2">
                <label htmlFor="country" className="col-6">
                  Country
                </label>
                <input
                  defaultValue={store.user.country}
                  id="country"
                  className="col-5"
                  placeholder="Country"
                  onChange={(e) =>
                    editUser({
                      ...user,
                      country:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>
              </div>

              {/* COVER & PROFILE PICTURE*/}

              <div className="row ">
                <label htmlFor="file">
                  <input
                    type="file" name="file" id="file" className="custom-file-input"
                    onChange={(e) =>
                      editUser({ ...user, profile_picture: e.target.files[0] })
                    }
                  />
                </label>
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

              {/* DESCRIPTION */}

              <h5>write a description</h5>
              <div className="input-group">
                <textarea
                  name="description"
                  id="textDescription"
                  className="form-control"
                  defaultValue={store.user.description}
                  aria-label="With textarea"
                  maxLength={120}
                  placeholder="Description"
                  onChange={(e) =>
                    editUser({ ...user, description: e.target.value })
                  }
                ></textarea>
              </div>
              <p>{user.description.length}/120</p>
            </div>

            {/* Save buttom */}

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


      {/*  NUEVO */}


    </div>
  );
};
