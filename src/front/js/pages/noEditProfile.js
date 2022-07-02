import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "../../styles/profile.css";

export const NoEditProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.verify();
    actions.getProfile(id);
    actions.getUserTripsById(id);
  }, []);

  return (
    <div>
      <section className="user-profile">
        <div className="content-profile">
          <div
            className="portada-perfil"
            style={{
              backgroundImage: "url(" + store.profile.banner_picture + ")",
            }}
          >
            <div className="shadow-banner"></div>
            <div className="avatar-picture-profile">
              <img src={store.profile.profile_picture} alt="img" />

              <label htmlFor="inputTag" className="label-style">
                cover image <br />
                <i className="fa fa-2x fa-camera"></i>
                <input
                  id="inputTag"
                  className="input-style "
                  type="file"
                  name="ratata"
                />
              </label>
            </div>
            <div className="data-profile">
              <h4 className="user-title">@{store.profile.username}</h4>
            </div>
          </div>
          <div className="information-box pt-1">
            <h3 className="information1">
              <b>{store.profile.firstname + " " + store.profile.lastname}</b>
            </h3>
            <h5 className="information2">
              {store.profile.city_of_residence + " - " + store.profile.country}
            </h5>
            <p className="information-bio text-break">
              {store.profile.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mt-2">
        <div className="py-2 border-top text-left justify-content-center"></div>
      </div>

      {/*MY TRIPS*/}

      <div className="content-trip-box container p-4 pt-1 mt-2">
        <div>
          <div className="text-center">
            <h2>
              <b>My Trips</b>
            </h2>
          </div>
          <div className="row row-cols-1 align-items-stretch g-4 ">
            <div className="d-flex overflow-auto">
              <div className="wrapper-trips">
                {store.userTrips
                  ? store.userTrips.map((e) => {
                      return (
                        <div
                          key={e.id}
                          className="col container "
                          style={{ width: "280px" }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"/trip/" + e.id}
                          >
                            <div
                              className="card-image-box d-flex text-white bg-dark align-items-end "
                              style={{
                                minHeight: "350px",
                                minWidth: "270px",
                                display: "block",
                                backgroundImage:
                                  "url(" + e.destination_picture + ")",
                              }}
                            >
                              <div
                                className="d-flex flex-column text-white "
                                style={{
                                  minHeight: "50px",
                                  minWidth: "230px",
                                  display: "block",
                                }}
                              >
                                <div className="card-title-area ms-3 ">
                                  <h3 className="">
                                    <i className="rute fas fa-map-marker-alt"></i>
                                    {e.destination}
                                  </h3>
                                </div>
                                <ul className="card-text-box list-unstyled ms-3">
                                  <li className="mb-1">
                                    <i
                                      className="icon fas fa-user-friends"
                                      style={{ fontSize: "16px" }}
                                    >
                                      {" "}
                                    </i>
                                    {e.people}
                                  </li>
                                  <li className="mb-1">
                                    <i
                                      className="icon fas fa-route"
                                      style={{ fontSize: "16px" }}
                                    ></i>
                                    {e.transport}
                                  </li>
                                  <li className="mb-1">
                                    <i
                                      className="icon fas fa-coins"
                                      style={{ fontSize: "16px" }}
                                    ></i>
                                    {e.cost} €
                                  </li>
                                  <li className="mb-1">
                                    <i
                                      className="icon fas fa-clock"
                                      style={{ fontSize: "16px" }}
                                    ></i>
                                    {moment(
                                      store.trip.start_of_the_trip
                                    ).format("LL")}{" "}
                                    -{" "}
                                    {moment(store.trip.end_of_the_trip).format(
                                      "LL"
                                    )}
                                  </li>
                                </ul>
                                <div className="shadow-card-image"></div>
                                <div className="shadow-card-image2"></div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 border-top mt-4 text-left justify-content-center"></div>
      </div>
    </div>
  );
};
