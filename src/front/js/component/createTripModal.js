import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/createTripModal.css";

export const CreateTripModal = ({ closeModal, createTrip, trip }) => {
  const { store, actions } = useContext(Context);
  const [infoError, setInfoError] = useState(false);
  const [infoCheck, setInfoCheck] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const special = [
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
  const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const bannerChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      createTrip({ ...trip, destination_picture: e.target.files[0] }),
        setSelectedImage(e.target.files[0]);
    }
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
    if (element) {
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
    }
  };

  const numbers = (element) => {
    if (element) {
      if (Array.isArray(numberList)) {
        for (let value of numberList) {
          for (let x of element) {
            if (value == x) {
              return true;
            } else false;
          }
        }
      } else {
        return false;
      }
    }
  };

  const deleteTripState = () => {
    trip.destination = "";
    trip.people = "";
    trip.transport = "";
    trip.start_of_the_trip = "";
    trip.end_of_the_trip = "";
    trip.cost = "";
    trip.text = "";
    trip.destination_picture = "";
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
          backdropFilter: "blur(3px) brightness(40%)",
        }}
      >
        <div className="modal-box2">
          <div className="content-head ">
            <div className="section-title">
              <h4>Create a trip</h4>
            </div>

            {/* CLOSE BUTTON */}

            <i
              type="button"
              className="close-button far fa-times-circle"
              aria-label="Close"
              onClick={() => {
                deleteTripState();
                closeModal();
              }}
            ></i>
          </div>
          <div className="content-body">
            <div className="banner-box">
              <img
                className="modal-banner"
                src={
                  selectedImage == undefined
                    ? "https://res.cloudinary.com/dmogh4y33/image/upload/v1656681829/d_hivrmb.jpg"
                    : URL.createObjectURL(selectedImage)
                }
                alt="img"
              />
            </div>
            <div className="banner-x">
              <div className="image-upload">
                <label htmlFor="file-input">
                  <img
                    className="image-selected"
                    src="https://res.cloudinary.com/dmogh4y33/image/upload/v1656708631/camera-icon-circle-21_k0bqrq.png"
                  />
                </label>
                <input
                  className=""
                  accept="image/*"
                  id="file-input"
                  type="file"
                  onChange={bannerChange}
                />
              </div>
            </div>

            {/* DESTINATION */}

            <div className="trip-first">
              <input
                type="text"
                className="input-time"
                placeholder="Destination"
                maxLength={25}
                style={
                  trip.destination.length == "" ||
                  specialCharacters(trip.destination) ||
                  numbers(trip.destination)
                    ? {
                        borderStyle: "solid",
                        borderWidth: "4px",
                        borderColor: "#DB2C2C",
                      }
                    : null
                }
                onChange={(e) =>
                  createTrip(
                    {
                      ...trip,
                      destination:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    },
                    setInfoError(false),
                    setInfoCheck(false)
                  )
                }
              ></input>

              {/* PEOPLE */}

              <input
                type="number"
                min={1}
                id="people"
                className="input-time"
                placeholder="Travel buddies"
                style={
                  trip.people < 1
                    ? {
                        borderStyle: "solid",
                        borderWidth: "4px",
                        borderColor: "#DB2C2C",
                      }
                    : null
                }
                onChange={(e) =>
                  createTrip(
                    {
                      ...trip,
                      people:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    },
                    setInfoError(false),
                    setInfoCheck(false)
                  )
                }
              ></input>

              {/* START OF THE TRIP */}

              <input
                type="date"
                className="input-time"
                placeholder="Start"
                style={
                  trip.start_of_the_trip == "" ||
                  trip.start_of_the_trip > trip.end_of_the_trip
                    ? {
                        borderStyle: "solid",
                        borderWidth: "4px",
                        borderColor: "#DB2C2C",
                      }
                    : null
                }
                onChange={(e) =>
                  createTrip(
                    {
                      ...trip,
                      start_of_the_trip:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    },
                    setInfoError(false),
                    setInfoCheck(false)
                  )
                }
              ></input>

              {/* END OF THE TRIP */}

              <input
                id="endTrip"
                type="date"
                required
                className="input-time"
                placeholder="End"
                style={
                  trip.start_of_the_trip > trip.end_of_the_trip ||
                  trip.end_of_the_trip == ""
                    ? {
                        borderStyle: "solid",
                        borderWidth: "4px",
                        borderColor: "#DB2C2C",
                      }
                    : null
                }
                onChange={(e) =>
                  createTrip(
                    {
                      ...trip,
                      end_of_the_trip:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    },
                    setInfoError(false),
                    setInfoCheck(false)
                  )
                }
              ></input>

              {/* TRANSPORT */}

              <select
                name="transporte"
                className="input-time"
                placeholder="none"
                onChange={(e) =>
                  createTrip(
                    {
                      ...trip,
                      transport:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    },
                    setInfoError(false),
                    setInfoCheck(false)
                  )
                }
              >
                <option>None</option>
                <option>Car</option>
                <option>Airplane</option>
                <option>Train</option>
                <option>Boat</option>
                <option>Bike</option>
                <option>Motorcycle</option>
              </select>

              {/* COST */}

              <input
                type="text"
                max={9999}
                min={0}
                id="cost"
                className="input-time"
                placeholder="Cost"
                style={
                  specialCharacters(trip.cost)
                    ? {
                        borderStyle: "solid",
                        borderWidth: "4px",
                        borderColor: "#DB2C2C",
                      }
                    : null
                }
                onChange={(e) =>
                  createTrip(
                    {
                      ...trip,
                      cost:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    },
                    setInfoError(false),
                    setInfoCheck(false)
                  )
                }
              ></input>
            </div>

            {/* DESCRIPTION TRIP */}

            <div className="section-text">
              <div className="text-area2">
                <textarea
                  className="text-information "
                  defaultValue={store.trip.text}
                  rows="4"
                  cols="50"
                  placeholder="About me"
                  maxLength={280}
                  onChange={(e) =>
                    createTrip(
                      {
                        ...trip,
                        text:
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1).toLowerCase(),
                      },
                      setInfoError(false),
                      setInfoCheck(false)
                    )
                  }
                ></textarea>
              </div>
            </div>
            {
              <p className="counter-text">
                {trip.text ? trip.text.length : 0}/280
              </p>
            }
          </div>
          <div className="modal-footer">
            <div className="save-footer">
              {/* SAVE BUTTON */}

              <button
                className="save-button"
                onClick={() => {
                  if (
                    trip.start_of_the_trip < trip.end_of_the_trip &&
                    !specialCharacters(trip.destination) &&
                    !numbers(trip.destination) &&
                    !trip.destination == "" &&
                    trip.people >= 1
                  ) {
                    messageCheck();
                    actions.createTrip(trip);
                  } else {
                    messageError();
                  }
                }}
              >
                save
              </button>
            </div>
          </div>
          {infoCheck == true ? (
            <div className="message-check">
              <i className="icon-check fas fa-check-circle"></i>
              <p>Changes saved</p>
            </div>
          ) : null}

          {trip.people < 1 && trip.people != "" ? (
            <div className="message-error">
              <i className="icon-error fas fa-exclamation-circle"></i>
              <p>At least one travel companion</p>
            </div>
          ) : null}

          {trip.destination == "" ||
          trip.start_of_the_trip.length == 0 ||
          trip.end_of_the_trip.length == 0 ? (
            <div className="message-error">
              <i className="icon-error fas fa-exclamation-circle"></i>
              <p>the field is required</p>
            </div>
          ) : null}

          {specialCharacters(trip.destination) ? (
            <div className="message-error">
              <i className="icon-error fas fa-exclamation-circle"></i>
              <p>Only letters</p>
            </div>
          ) : null}

          {numbers(trip.destination) ? (
            <div className="message-error">
              <i className="icon-error fas fa-exclamation-circle"></i>
              <p>Only letters 2</p>
            </div>
          ) : null}

          {trip.start_of_the_trip > trip.end_of_the_trip &&
          trip.start_of_the_trip != "" &&
          trip.end_of_the_trip != "" ? (
            <div className="message-error">
              <i className="icon-error fas fa-exclamation-circle"></i>
              <p>the dates do not match</p>
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
