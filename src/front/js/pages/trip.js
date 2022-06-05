import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams, Link } from "react-router-dom";
import { SendMessageModal } from "../component/sendMessageModal";
import { EditTripModal } from "../component/editTripModal";
import moment from "moment";
import "../../styles/trip.css";

export const Trip = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [modalMessage, setModalMessage] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const history = useHistory();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    actions.getTrip(id);
    if (!store.trip) {
      history.push("/feed");
    }
  }, []);

  useEffect(() => {
    setTrip(store.trip);
  }, [store.trip]);

  const peopleCards = [
    {
      id: 1,
      name: "Yan Dupalok",
      image:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      name: "Amelia Treu",
      image:
        "https://images.pexels.com/photos/3435504/pexels-photo-3435504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      name: "Dana Silva",
      image:
        "https://images.pexels.com/photos/3579181/pexels-photo-3579181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 4,
      name: "Andre Rush",
      image:
        "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Carlos Blun",
      image:
        "https://images.pexels.com/photos/2599510/pexels-photo-2599510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  return (
    <>
      {/*Banner*/}
      {store.trip ? (
        <>
          {modalMessage ? (
            <SendMessageModal
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
                  <img src={store.trip.profile_picture} alt="img" />
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
                        className="mach-button btn btn-light "
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
                      36 <i className="fas fa-heart"></i>
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
              <div className="placeDescription py-3 my-4 border-top border-bottom text-left justify-content-center">
                <p className="text-description text-break">{store.trip.text}</p>
              </div>

              {/* Features */}

              <div className="features-box">
                <p className="features">
                  <i className="icon-image icon fas fa-clock"></i>
                  {moment(store.trip.start_of_the_trip).format("LL")} -{" "}
                  {moment(store.trip.end_of_the_trip).format("LL")}
                </p>
                <p className="features">
                  <i className="icon-image icon fas fa-user-friends"> </i>0/
                  {store.trip.people}
                </p>
                <p className="features">
                  <i className="icon-image icon fas fa-route"></i>{" "}
                  {store.trip.transport}
                </p>
                <p className="features">
                  <i className="icon-image icon fas fa-coins"></i>{" "}
                  {store.trip.cost} €
                </p>
              </div>

              {/* Información de viaje */}

              <div
                className="box mt-3 position-static d-block py-3"
                tabIndex="-1"
                role="dialog"
                id="modalChoice"
              >
                <h3 className="mt-2 text-dark text-center">
                  <b>Travel buddies</b>
                </h3>

                {/* CARDS */}

                <div >
                  <div className="row row-cols-1 align-items-stretch g-4 pt-1">
                    <div className="d-flex overflow-auto">
                      <div className="wrapper">
                        {peopleCards.map((e) => {
                          return (
                            <div
                              key={e.id}
                              className="col container "
                              style={{ width: "290px" }}
                            >
                              <Link style={{ textDecoration: "none" }} to="/user">

                                <div
                                  className="card-image-box d-flex text-white bg-dark align-items-end "
                                  style={{
                                    minHeight: "350px",
                                    minWidth: "280px",
                                    display: "block",
                                    backgroundImage: "url(" + e.image + ")",
                                  }}
                                >
                                  <div className="d-flex flex-column text-white " style={{
                                    minHeight: "50px",
                                    minWidth: "230px",
                                    display: "block",
                                  }} >
                                    <ul className="card-text-box list-unstyled ms-3">
                                      <li className="mb-1">
                                        <h2>{e.name}</h2>
                                      </li>
                                    </ul>
                                    <div className="shadow-card-image"></div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="py-2 border-top mt-4 text-left justify-content-center">
                  </div>
                </div>


                {/* API RUTE */}

                <h3 className="mt-5 text-dark text-center">
                  <b>Rute</b>
                </h3>
                <div className="card bg-dark text-white m-5 mb-1 border border-primary border-3 ">
                  <img
                    src="https://img.olhardigital.com.br/wp-content/uploads/2019/03/20190301101226-1238x450.jpg"
                    className="card-img-top"
                    alt="map"
                  />
                  <div className="card-img-overlay"></div>
                </div>

                {/* Información extendida del viaje */}

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
        </>
      ) : (
        "loading"
      )}{" "}
    </>
  );
};
