import React, { useContext } from "react";
import { Context } from "../store/appContext";

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
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Edit user
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                closeModal();
              }}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row text-center">
              <input
                type="file"
                onChange={(e) =>
                  editUser({ ...user, profile_picture: e.target.files[0] })
                }
              />
              <label htmlFor="username" className="col-4">
                Username
              </label>
              <input
                defaultValue={store.user.username}
                id="username"
                className="col-5" placeholder="Username"
                onChange={(e) =>
                  editUser({ ...user, username: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="name" className="col-4">
                First Name
              </label>
              <input
                defaultValue={store.user.firstname}
                id="firstname"
                className="col-5" placeholder="First Name"
                onChange={(e) =>
                  editUser({ ...user, firstname: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="lastname" className="col-4">
                Lastname
              </label>
              <input
                defaultValue={store.user.lastname}
                id="lastname"
                className="col-5" placeholder="Last Name"
                onChange={(e) =>
                  editUser({ ...user, lastname: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="description" className="col-4">
                Description
              </label>
              <input
                defaultValue={store.user.description}
                id="description"
                className="col-5" placeholder="Description"
                onChange={(e) =>
                  editUser({ ...user, description: e.target.value })
                }
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="country" className="col-4">
                Country
              </label>
              <input
                defaultValue={store.user.country}
                id="country"
                className="col-5" placeholder="Country"
                onChange={(e) => editUser({ ...user, country: e.target.value })}
              ></input>
            </div>
            <div className="row text-center">
              <label htmlFor="city_of_residence" className="col-4">
                city_of_residence
              </label>
              <input
                defaultValue={store.user.city_of_residence}
                id="city_of_residence"
                className="col-5" placeholder="City of residence"
                onChange={(e) =>
                  editUser({ ...user, city_of_residence: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="col-2 offset-1 btn btn-primary"
              onClick={async () => {
                await actions.editUser(user);
                closeModal();
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
