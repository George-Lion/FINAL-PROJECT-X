import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams, Link } from "react-router-dom";
import { SendMessageModal } from "../component/sendMessageModal";
import { EditTripModal } from "../component/editTripModal";
import { ImageGalery } from "../component/imageGalery";
import { TravelBuddies } from "../component/travelBuddies";
import { GoogleMapsApi } from "../component/googleMapsApi";
import moment from "moment";
import "../../styles/trip.css";

export const Trip = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [modalMessage, setModalMessage] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const history = useHistory();
  const [trip, setTrip] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    actions.getTrip(id);
    if (!store.trip) {
      history.push("/feed");
    }
  }, []);

  useEffect(() => {
    setTrip(store.trip);
    setMessage({ ...message, trip_id: store.trip.user_id_of_trip_creator })
  }, [store.trip]);

  return (
    <Fragment>
      {/*Banner*/}
      {store.trip ? (
        <>
          {modalMessage ? (
            <SendMessageModal
              message={message}
              setMessage={(x) => {
                setMessage({ ...message, message: x })
              }}
              closeModal={() => {
                setModalMessage(false);
              }}
            />
          ) : null}
          {modalEdit ? (
            <EditTripModal
              closeModal={() => {
                setModalEdit(false);
              }}
              editTrip={(trip) => {
                setTrip(trip);
              }}
              trip={trip}
            />
          ) : null}
          <section className="user-perfil">
            <div className="contenedor-perfil">
              <div
                className="portada-perfil"
                style={{
                  backgroundImage:
                    "url(" + store.trip.destination_picture + ")",
                }}
              >
                <div className="sombra"></div>
                <div className="avatar-perfil">
                  <Link to={"/profile/" + store.trip.user_id_of_trip_creator}>
                    <img src={store.trip.profile_picture} alt="img" />
                  </Link>
                </div>
                <div className="datos-perfil">
                  <h4 className="titulo-usuario">
                    <i className="rute fas fa-map-marker-alt"></i>
                    {store.trip.destination}
                  </h4>
                </div>
                <div className="datos-button">
                  <ul className="lista-perfil">
                    <li>
                      <button
                        type="button"
                        className="match-button btn btn-light "
                        onClick={() => {
                          console.log("Modal Click");
                          setModalMessage(true);
                        }}
                      >
                        I'm in
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="datos-like">
                  <ul className="lista-perfil">
                    <li>
                      <i className="fas fa-heart"></i>
                      {store.trip.likes ? store.trip.likes.length : 0}
                    </li>
                  </ul>
                </div>
                {store.user_id == store.trip.user_id_of_trip_creator ? (
                  <div className="opcciones-perfil">
                    <button
                      type="button"
                      onClick={() => {
                        setModalEdit(true);
                      }}
                    >
                      <i className="fas fa-pencil"></i>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
          <div>
            <h3 className="text-center">
              <b>
                <Link
                  id="RouterNavLink"
                  to="/profile"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  {store.trip.user_firstname} {store.trip.user_lastname}
                </Link>
              </b>
            </h3>
            <h5 className="text-dark text-center">
              {store.trip.user_city_of_residence +
                " - " +
                store.trip.user_country}
            </h5>
            <div className="container">
              <div className="place-description py-2 my-3 border-top border-bottom text-left justify-content-center mb-4">
                <p className="text-description text-break">{store.trip.text}</p>
              </div>

              {/* FEATURES */}

              <div className="features-box">
                <i className="icon-image fas fa-user-friends"> 0/{store.trip.people} </i>
                <i className="icon-image fas fa-route"> {store.trip.transport}</i>{" "}
                <i className="icon-image fas fa-coins"> {store.trip.cost} €</i>{" "}
                <i className="icon-image fas fa-clock"> {moment(store.trip.start_of_the_trip).format("LL")} -{" "}
                  {moment(store.trip.end_of_the_trip).format("LL")}
                </i>
              </div>

              {/*  TRAVEL BUDDIES */}

              <TravelBuddies />

              {/* TRIP INFORMATION */}

              <div
                className="position-static d-block py-3"
                tabIndex="-1"
                role="dialog"
                id="modalChoice"
              >

                {/* API GOOGLE MAPS */}

                <div className="mt-5 ">
                  <h3 className="text-dark text-center">
                    <b>Rute</b>
                  </h3>
                  <div className="card bg-dark text-white m-5 mb-1 border border-primary border-3 ">
                    <GoogleMapsApi></GoogleMapsApi>
                    <div className="card-img-overlay"></div>
                  </div>

                  {/* IMAGE GALERY */}

                  <ImageGalery />

                  {/* TRIP INFORMATION */}

                  <div className="container px-4 py-5" id="featured-3">
                    <h3 className="mt-1 text-dark text-center">
                      <b>More information</b>
                    </h3>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                      <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient"></div>
                        <h2>Featured title</h2>
                        <p>
                          Paragraph of text beneath the heading to explain the
                          heading. We'll add onto it with another sentence and
                          probably just keep going until we run out of words.
                        </p>
                        <a href="#" className="icon-link">
                          Call to action
                        </a>
                      </div>
                      <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient"></div>
                        <h2>Featured title</h2>
                        <p>
                          Paragraph of text beneath the heading to explain the
                          heading. We'll add onto it with another sentence and
                          probably just keep going until we run out of words.
                        </p>
                        <a href="#" className="icon-link">
                          Call to action
                        </a>
                      </div>
                      <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient"></div>
                        <h2>Featured title</h2>
                        <p>
                          Paragraph of text beneath the heading to explain the
                          heading. We'll add onto it with another sentence and
                          probably just keep going until we run out of words.
                        </p>
                        <a href="#" className="icon-link">
                          Call to action
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "loading"
      )}{" "}
    </Fragment>
  );
};
