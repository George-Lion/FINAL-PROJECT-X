import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/createTripModal.css";

export const CreateTripModal = ({ closeModal, createTrip, trip }) => {
  const { store, actions } = useContext(Context)
  const [infoError, setInfoError] = useState(false);
  const [infoCheck, setInfoCheck] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
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

  const bannerChange = (e) => {

    if (e.target.files && e.target.files.length > 0) {
      createTrip({ ...trip, destination_picture: e.target.files[0] }),
        setSelectedImage(e.target.files[0])
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
          backdropFilter: "blur(3px) brightness(40%)",
        }}
      >
        <div className="modal-box2">
          <div className="content-head modal-header">
            <div className="section-title">
              <h4>Create a trip</h4>
            </div>

            {/* CLOSE BUTTON */}

            <i
              type="button"
              className="close-button far fa-times-circle"
              aria-label="Close"
              onClick={() => {
                closeModal();
              }}
            ></i>
          </div>
          <div className="content-body">

            <div className="banner-box">
              <img className="modal-banner" src={selectedImage == undefined ? "https://cdn.iconscout.com/icon/free/png-256/photo-size-select-actual-1782180-1512958.png" : URL.createObjectURL(selectedImage)} alt="img" />
            </div>
            <input className="banner-input"
              accept="image/*"
              type="file"
              onChange={bannerChange}
            />

            {/*         <input
              type="file"
              className="custom-file-input3"
              onChange={(e) =>
                createTrip({
                  ...trip,
                  destination_picture: e.target.files[0],
                })
              }
            />
 */}
            {/* DESTINATION */}

            <div className="section-trip">
              <div className="trip-first">
                <input
                  id="place"
                  className="input-time"
                  placeholder="Destination"
                  maxLength={25}
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      destination:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>

                {/* PEOPLE */}

                <input
                  type="number"
                  id="people"
                  className="input-time"
                  placeholder="Travel buddies"
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      people:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>

                {/* START OF THE TRIP */}

                <input
                  type="date"
                  className="input-time"
                  placeholder="Start"
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      start_of_the_trip:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>

                {/* END OF THE TRIP */}

                <input
                  id="endTrip"
                  type="date"
                  required
                  className="input-time"
                  placeholder="End"
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      end_of_the_trip:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
                  }
                ></input>

                {/* TRANSPORT */}

                <select
                  name="transporte"
                  className="input-time"
                  placeholder="none"
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      transport:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    })
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
                  type="number"
                  max="9999"
                  id="cost"
                  defaultValue={store.trip.cost}
                  className="input-time"
                  placeholder="Cost"
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      cost:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    }, setInfoError(false),
                      setInfoCheck(false))
                  }
                ></input>
              </div>
            </div>

            {/* DESCRIPTION TRIP */}

            <div className="section-text">
              <div className="text-area">
                <textarea
                  className="text-information "
                  defaultValue={store.trip.text}
                  rows="4"
                  cols="50"
                  placeholder="About me"
                  maxLength={280}
                  onChange={(e) =>
                    createTrip({
                      ...trip,
                      text:
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase(),
                    }, setInfoError(false),
                      setInfoCheck(false))
                  }
                ></textarea>
              </div>
              {
                <p className="counter-bio">{trip.text ? trip.text.length : 0}/280</p>
              }
            </div>
          </div>
          <div className="modal-footer">
            <div className="buttons-footer">

              {/* SAVE BUTTON */}

              <button
                className="save-button"
                onClick={() => {
                  /*      if (
                         !specialCharacters(user.username) &&
                         !specialCharacters(user.firstname) &&
                         !specialCharacters(user.lastname) &&
                         user.username.length > 0 &&
                         user.firstname.length > 0 &&
                         user.lastname.length > 0
                       ) {
                         messageCheck(); */
                  actions.createTrip(trip);
                  /*  } else {
                     messageError();
                   } */
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

          {/*     {user.username.length == 0 || user.firstname.length == 0 || user.lastname.length == 0 ? (
          <div className="message-error">
            <i className="icon-error fas fa-exclamation-circle"></i>
            <p>the field is required</p>
          </div>
        ) : null}

        {specialCharacters(user.username) || specialCharacters(user.firstname) || specialCharacters(user.lastname) ? (
          <div className="message-error">
            <i className="icon-error fas fa-exclamation-circle"></i>
            <p>Only special characters _ or . </p>
          </div>
        ) : null} */}

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


