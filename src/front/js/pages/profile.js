import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { EditProfileModal } from "../component/editProfileModal";
import "../../styles/profile.css";
import { CreateTripModal } from "../component/createTripModal";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreateTrip, setShowCreateTrip] = useState(false);
  const [user, setUser] = useState();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    actions.getUser();
    actions.getUserTrips();
    actions.getUserProfiles();
  }, []);

  return (
    <div>
      <img
        src="https://wallpaperaccess.com/full/6584451.jpg"
        style={{ width: "100%", height: "300px" }}
      ></img>
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

      <div className="container">
        <div className="container">
          <div className="position-relative">
            <div className="position-absolute" style={{ bottom: "-150px" }}>
              <img
                src="https://res.cloudinary.com/ddskbfm6u/image/upload/v1653587306/samples/animals/cat.jpg"
                style={{
                  width: "250px",
                  height: "250px",
                }}
                className="card-img-top rounded-circle border border-white border border-5"
                alt="..."
              />
              <h1 style={{ fontSize: "30px" }}>
                {store.user.city_of_residence + " - " + store.user.country}
              </h1>
            </div>
          </div>

          <div className="position-relative">
            <div
              className="position-absolute"
              style={{ left: "340px", bottom: "-250px" }}
            >
              <h1 className="text-start" style={{ fontSize: "80px" }}>
                {store.user.firstname + " " + store.user.lastname}
              </h1>

              <h1 className="text-start" style={{ fontSize: "60px" }}>
                {store.user.username}
              </h1>

              <p className="text-start" style={{ fontSize: "34px" }}>
                {store.user.description}
              </p>

              <i
                className="fas fa-pen"
                onClick={(e) => {
                  setShowEdit(true);
                  setUser(store.user);
                }}
              ></i>
            </div>
          </div>
        </div>

        <br />
        <div style={{ marginTop: "300px" }}>
          <h1>My Rutes</h1>

          <br />

          {/*rutes*/}
          <div className="row row-cols-1 align-items-stretch g-4 py-5">
            <div className="d-flex overflow-auto">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowCreateTrip(true);
                }}
              >
                ADD TRIP
              </button>
              {store.userTrips.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="col container"
                    style={{ width: "800px" }}
                  >
                    <Link style={{ textDecoration: "none" }} to="/trip">
                      <div
                        className="d-flex text-white bg-dark align-items-end"
                        style={{
                          minHeight: "400px",
                          minWidth: "300px",
                          display: "block",
                          backgroundImage: "url(" + e.image + ")",
                        }}
                      >
                        <div className="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                          <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                              <i className="fas fa-map-marker-alt fs-3 m-2"></i>
                            </li>
                            <li className="ms-2">
                              <h2>{e.name}</h2>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <br />
          <h1>
            Estas personas ya han viajado con
            {store.user.firstname + " " + store.user.lastname}
          </h1>
          <br />

          {/*Profiles*/}
          <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-between g-4 py-5">
            {store.userProfiles.map((e) => {
              return (
                <div
                  key={e.id}
                  className="card m-2"
                  style={{
                    backgroundColor: "#D7D7D7",
                    width: "400px",
                    height: "180px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img
                        src={e.user_image}
                        className="img-fluid rounded-start"
                        alt="Imagenes Avatar"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                    <div className="col-md-6 ">
                      <div className="card-body">
                        <h5 className="card-title">{e.fullname}</h5>
                        <p className="card-text">
                          Exelente persona, vivimos muchas aventuras juntas.
                        </p>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/profile"}
                        >
                          <p className="card-text">
                            <small className="text-muted">Ver perfil</small>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
