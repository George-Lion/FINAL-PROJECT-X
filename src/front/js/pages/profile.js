import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { EditProfileModal } from "../component/editProfileModal";
import { CreateTripModal } from "../component/createTripModal";
import moment from "moment";
import "../../styles/profile.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreateTrip, setShowCreateTrip] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [user, setUser] = useState();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    actions.getUser();
    actions.getUserTrips();
    actions.getUserProfiles();
  }, []);

  return (
    <div>
      <section className="user-profile">
        <div className="content-profile">
          <div
            className="portada-perfil"
            style={{
              backgroundImage:
                "url(" + store.user.banner_picture + ")",
            }}
          >
            <div className="shadow-banner"></div>
            <div className="avatar-picture-profile">
              <img src={store.user.profile_picture} alt="img" />
              <a href="#" className="cambiar-foto" >
                <i className="fas fa-camera"></i>
                <span>Cambiar foto</span>
              </a>

              <label htmlFor="inputTag" className="label-style">
                cover image <br />
                <i className="fa fa-2x fa-camera"></i>
                <input
                  id="inputTag" className="input-style "
                  type="file"
                  name="ratata"

                />
              </label>
            </div>
            <div className="data-profile">
              <h4 className="user-title">
                @{store.user.username}
              </h4>
            </div>
            <div className="options-profile">
              <button
                type="button"
                onClick={(e) => {
                  setShowEdit(true);
                  setUser(store.user);
                }}
              >
                <i className="fas fa-pencil"></i>
              </button>
            </div>
          </div>
          <div className="information-box pt-1">
            <h4 className="information"><b>{store.user.firstname + " " + store.user.lastname}</b></h4>
            <h5 className="information">
              {store.user.city_of_residence + " - " + store.user.country}
            </h5>
            <p className="information-bio text-break" >
              {store.user.description}
            </p>
          </div>
        </div>
      </section>

      {showEdit ? (
        <EditProfileModal
          closeModal={() => {
            setShowEdit(false);
          }}
          editUser={(user) => {
            setUser(user);
          }}
          user={user}
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

      {showCreateTrip ? (
        <CreateTripModal
          closeModal={() => {
            setShowCreateTrip(false);
          }}
          createTrip={(trip) => {
            setTrip(trip);
          }}
          trip={trip}
        />
      ) : null}

      <div className="container mt-2">
        <div className="py-2 border-top text-left justify-content-center">
        </div>
      </div>

      {/*MY TRIPS*/}

      <div className="content-trip-box container p-4 pt-1 mt-2">
        <div >
          <div className="text-center">
            <h2><b>My Trips</b></h2>
          </div>
          <div className="row row-cols-1 align-items-stretch g-4 ">
            <div className="d-flex overflow-auto">
              <button
                className="btn btn-dark text-light mt-4" style={{ "height": "350px" }}
                onClick={() => {
                  setShowCreateTrip(true);
                }}
              >
                <b>ADD TRIP</b>
              </button>
              <div className="wrapper-trips">
                {store.userTrips.map((e) => {
                  return (
                    <div
                      key={e.id}
                      className="col container "
                      style={{ width: "280px" }}
                    >
                      <Link style={{ textDecoration: "none" }} to="/trip">

                        <div
                          className="card-image-box d-flex text-white bg-dark align-items-end "
                          style={{
                            minHeight: "350px",
                            minWidth: "270px",
                            display: "block",
                            backgroundImage: "url(" + e.destination_picture + ")",
                          }}
                        >
                          <div className="d-flex flex-column text-white " style={{
                            minHeight: "50px",
                            minWidth: "230px",
                            display: "block",
                          }} >
                            <div className="card-title-area ms-3 ">
                              <h3 className=""><i className="rute fas fa-map-marker-alt"></i>{e.destination}</h3>
                            </div>
                            <ul className="card-text-box list-unstyled ms-3">
                              <li className="mb-1">
                                <i className="icon fas fa-user-friends" style={{ fontSize: "16px" }}> </i>
                                {e.people}
                              </li>
                              <li className="mb-1">
                                <i className="icon fas fa-route" style={{ fontSize: "16px" }}></i>
                                {e.transport}
                              </li>
                              <li className="mb-1">
                                <i className="icon fas fa-coins" style={{ fontSize: "16px" }}></i>
                                {e.cost} €
                              </li>
                              <li className="mb-1">
                                <i className="icon fas fa-clock" style={{ fontSize: "16px" }}></i>
                                {moment(store.trip.start_of_the_trip).format("LL")} -{" "}
                                {moment(store.trip.end_of_the_trip).format("LL")}
                              </li>
                            </ul>
                            <div className="shadow-card-image"></div>
                            <div className="shadow-card-image2"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 border-top mt-4 text-left justify-content-center">
        </div>

        {/*TESTIMONIALS*/}

        <div>
          <div className="mt-2 mb-5">
            <h3>
              Estas personas ya han viajado con <b>{store.user.firstname + " " + store.user.lastname}</b>:
            </h3>
            <div className="card mb-3 mt-4" style={{ "maxWidth": "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
