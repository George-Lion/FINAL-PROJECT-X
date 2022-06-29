import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/editInformationModal.css";

export const EditInformationModal = ({ closeModal, editUser, user }) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const [infoError, setInfoError] = useState(false);
  const [infoCheck, setInfoCheck] = useState(false);
  const special = [
    " ",
    "$",
    "#",
    "*",
    "@",
    "-",
    "(",
    ")",
    "!",
    "^",
    "?",
    "/",
    "=",
    "+",
    "[",
    "]",
    ",",
    "%",
    "{",
    "}",
    "'",
    '"',
    "<",
    ">",
    "|",
    "¨",
    "`",
    ":",
    ";",
    "¿",
    "·",
    "&",
    "¡",
  ];
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
        history.push("/");
        actions.logout();
      }
    } catch (e) {}
  };

  const messageError = () => {
    setInfoError(true);
    setInfoCheck(false);
  };

  const messageCheck = () => {
    setInfoCheck(true);
    setInfoError(false);
  };

  const specialCharacters = (element) => {
    if (Array.isArray(special)) {
      for (let value of special) {
        for (let x of element) {
          if (value == x) {
            return true;
          } else false;
        }
      }
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <div
        className="modal fade show"
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
        <div className="modal-box1">
          <div className="content-head">
            <div className="section-title">
              <h3>Edit Profile</h3>
            </div>

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
          <div className="content-body">
            {/* USERNAME */}

            <div className="section-user">
              <div className="section-username">
                {/*  <label htmlFor="username">Username:</label> */}
                <input
                  className="input-username"
                  type="text"
                  maxLength={35}
                  defaultValue={store.user.username}
                  id="username"
                  name="Username"
                  placeholder="Username"
                  onChange={(e) =>
                    editUser(
                      { ...user, username: e.target.value },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></input>
              </div>
            </div>

            {user.username.length == 0 ? (
              <div className="error-name">
                <i className="icon-error fas fa-exclamation-circle"></i>
                <p>username is required</p>
              </div>
            ) : null}
            {user.username.length > 25 ? (
              <div className="error-name">
                <i className="icon-error fas fa-exclamation-circle"></i>
                <p>Character limit exceeded (25)</p>
              </div>
            ) : null}
            {specialCharacters(user.username) ? (
              <div className="error-name">
                <i className="icon-error fas fa-exclamation-circle"></i>
                <p>Only special characters _ or . </p>
              </div>
            ) : null}

            {/* FIRSTNAME AND LASTNAME */}

            <div className="section-info">
              <div className="section-first">
                {/* <label htmlFor="first">First Name:</label> */}
                <input
                  className="input-style"
                  type="text"
                  maxLength={30}
                  defaultValue={store.user.firstname}
                  id="first"
                  name="First"
                  placeholder="FirstName"
                  onChange={(e) =>
                    editUser(
                      {
                        ...user,
                        firstname: e.target.value,
                      },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></input>
                {user.firstname.length == 0 ? (
                  <div className="error-name">
                    <i className="icon-error fas fa-exclamation-circle"></i>
                    <p>firstname is required</p>
                  </div>
                ) : null}
                {user.firstname.length > 15 ? (
                  <div className="error-name">
                    <i className="icon-error fas fa-exclamation-circle"></i>
                    <p>Character limit (15)</p>
                  </div>
                ) : null}
              </div>

              <div className="section-last">
                {/* <label htmlFor="last">Last Name:</label> */}
                <input
                  className="input-style"
                  type="text"
                  maxLength={15}
                  defaultValue={store.user.lastname}
                  id="last"
                  name="Last"
                  placeholder="LastName"
                  onChange={(e) =>
                    editUser(
                      {
                        ...user,
                        lastname: e.target.value,
                      },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></input>
                {user.lastname.length == 0 ? (
                  <div className="error-name">
                    <i className="icon-error fas fa-exclamation-circle"></i>
                    <p>lastname is required</p>
                  </div>
                ) : null}
              </div>
            </div>

            {/* CITY AND COUNTRY OF RESIDENCE */}

            <div className="section-info">
              <div className="section-first">
                {/* <label htmlFor="city">City:</label> */}
                <input
                  className="input-style"
                  type="text"
                  maxLength={18}
                  defaultValue={store.user.city_of_residence}
                  id="city"
                  name="City"
                  placeholder="City"
                  onChange={(e) =>
                    editUser(
                      {
                        ...user,
                        city_of_residence:
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1).toLowerCase(),
                      },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></input>
              </div>
              <div className="section-last">
                {/* <label htmlFor="country">Country:</label> */}
                <input
                  className="input-style"
                  type="text"
                  maxLength={18}
                  defaultValue={store.user.country}
                  id="country"
                  name="Country"
                  placeholder="Country"
                  onChange={(e) =>
                    editUser(
                      {
                        ...user,
                        country:
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1).toLowerCase(),
                      },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></input>
              </div>
            </div>

            {/* ABOUT ME */}

            <div className="section-text">
              <div className="text-area">
                {/* <label htmlFor="textDescription">About me:</label> */}
                <textarea
                  className="text-information "
                  defaultValue={store.user.description}
                  rows="4"
                  cols="50"
                  placeholder="About me"
                  maxLength={280}
                  onChange={(e) =>
                    editUser(
                      {
                        ...user,
                        description:
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1).toLowerCase(),
                      },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></textarea>
              </div>
              {
                <p className="counter-bio">
                  {user.description ? user.description.length : 0}/280
                </p>
              }
            </div>
          </div>
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

            {/* SAVE BUTTON */}

            <button
              className="save-button"
              onClick={() => {
                if (
                  !specialCharacters(user.username) &&
                  user.username.length > 0 &&
                  user.username.length <= 25 &&
                  user.firstname.length <= 15 &&
                  user.firstname.length > 0 &&
                  user.lastname.length > 0 &&
                  user.lastname.length <= 15
                ) {
                  messageCheck();
                  actions.editUser(user);
                } else {
                  messageError();
                }
              }}
            >
              {/* <i className="far fa-save me-2"></i> */}save
            </button>
          </div>
          {infoCheck == true ? (
            <div className="message-check">
              <i className="icon-check fas fa-check-circle"></i>
              <p>Changes saved</p>
            </div>
          ) : null}

          {infoError == true ? (
            <div className="message-error">
              <i className="icon-error2 fas fa-exclamation-circle"></i>
              <p>please write the fields correctly </p>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};
