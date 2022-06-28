import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/editProfileModal.css";

export const EditProfileModal = ({ closeModal, editUser, user }) => {
  const { store, actions } = useContext(Context);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const deleteProfile = async () => {
    try {
      const resp = await fetch(store.url + "deleteProfile", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await resp.json();
      if (resp.ok) {
        setConfirmDelete(false);
        history.push("/feed");
      }
    } catch (e) {}
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
          <div className="row m-4">
            <div className="row">
              {/* COVER & PROFILE PICTURE*/}

              <div className="row mb-3">
                <label htmlFor="file" className="mx-auto">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="custom-file-input"
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

              {/* USERNAME */}

              <div className="row mb-2">
                <label htmlFor="username" className="col-6">
                  Username
                </label>
                <input
                  defaultValue={store.user.username}
                  id="username"
                  className="col-6"
                  placeholder="Username"
                  onChange={(e) =>
                    editUser({ ...user, username: e.target.value })
                  }
                ></input>
              </div>

              {/* FIRST NAME */}

              <div className="row mb-2">
                <label htmlFor="firstname" className="col-6">
                  First Name
                </label>
                <input
                  defaultValue={store.user.firstname}
                  id="firstname"
                  className="col-6"
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

              <div className="row mb-2">
                <label htmlFor="lastname" className="col-6">
                  Last Name
                </label>
                <input
                  defaultValue={store.user.lastname}
                  id="lastname"
                  className="col-6"
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

              <div className="row  mb-2">
                <label htmlFor="city_of_residence" className="col-6">
                  City
                </label>
                <input
                  defaultValue={store.user.city_of_residence}
                  id="city_of_residence"
                  className="col-6"
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

              <div className="row mb-4">
                <label htmlFor="country" className="col-6">
                  Country
                </label>
                <input
                  defaultValue={store.user.country}
                  id="country"
                  className="col-6"
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

              {/* DESCRIPTION */}

              <p>About me:</p>
              <div className="input-group">
                <textarea
                  name="description"
                  id="textDescription"
                  className="form-control"
                  defaultValue={store.user.description}
                  aria-label="With textarea"
                  maxLength={280}
                  placeholder="Text"
                  onChange={(e) =>
                    editUser({ ...user, description: e.target.value })
                  }
                ></textarea>
              </div>
              <p>{user.description ? user.description.length : 0}/280</p>
            </div>

            {/* Save buttom */}
            {confirmDelete ? (
              <div
                className="modal fade show"
                id="exampleModal"
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
                <div className="delete-modal modal-dialog">
                  <div className="trip-modal modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Are you sure you want to delete the profile?{" "}
                        <i>This action cannot be undone</i>
                      </h5>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light text-dark"
                        onClick={() => {
                          setConfirmDelete(false);
                        }}
                        data-bs-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger text-white"
                        onClick={() => {
                          deleteProfile(true);
                        }}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="modal-footer">
              <i
                className="delete-icon fa-solid fa-trash"
                title="delete trip"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  setConfirmDelete(true);
                }}
              ></i>

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
