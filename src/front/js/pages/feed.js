import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../styles/feed.css";

export const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { actions, store } = useContext(Context);
  const [response, setResponse] = useState([]);

  const searchDestination = async () => {
    try {
      const resp = await fetch(store.url + "search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchTerm),
      });
      const dataSearched = await resp.json();
      setResponse(dataSearched.trip);
    } catch (e) {
      alert("ERROR");
    }
  };

  useEffect(() => {
    actions.getTrips();
  }, []);

  return (
    <Fragment>
      <nav className="navbar mt-2">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search destination"
              aria-label="Search"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  searchDestination();
                }
              }}
              onChange={(e) => {
                setSearchTerm({
                  ...searchTerm,
                  destination:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1).toLowerCase(),
                });
              }}
            />
            <input
              className="form-control me-2"
              type="date"
              aria-label="Search"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  searchDestination();
                }
              }}
              onChange={(e) => {
                setSearchTerm({ ...searchTerm, date: e.target.value });
              }}
            />
            <input
              className="form-control me-2"
              type="date"
              aria-label="Search"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  searchDestination();
                }
              }}
              onChange={(e) => {
                setSearchTerm({ ...searchTerm, end_date: e.target.value });
              }}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                searchDestination();
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        {response == ""
          ? store.trips.map((e) => {
              return (
                <div className="pepe" key={e.id}>
                  <Link
                    to={"/profile/" + e.user_id_of_trip_creator}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      className="avatar-picture ms-3"
                      src={e.profile_picture}
                      alt="user"
                    />
                    <div className="lolo">
                      <h2 className="">{e.username}</h2>
                    </div>
                  </Link>
                  <Link to={"/trip/" + e.id}>
                    <div
                      className="feed-card-image my-5 cardprueba position-relative"
                      style={{
                        backgroundImage: "url(" + e.destination_picture + ")",
                      }}
                    >
                      <div className="shadow-bottom-image"></div>
                      <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
                        <p className="destination-title-font">
                          <i className="fas fa-map-marker"></i> {e.destination}
                        </p>
                      </div>
                      <></>
                      <div className="card-body little-profile">
                        <div className="position-absolute top-50 start-0 translate-middle-y pro-img"></div>
                        <div className="information-user-box container position-absolute bottom-0 start-50 translate-middle-x mb-3">
                          <div className="d-flex justify-content-around">
                            <span className="">&#8205;</span>
                            <span className="a">
                              <i className="fas fa-clock"></i>{" "}
                              {moment(e.start_of_the_trip).format("LL")} -{" "}
                              {moment(e.end_of_the_trip).format("LL")}
                            </span>
                            <span className="">
                              <i className="fas fa-user-friends"></i> {e.people}{" "}
                            </span>
                            {!e.likes.includes(store.user_id) ? (
                              <span className="fontprueba">
                                <i
                                  className="fas fa-heart"
                                  onClick={() => {
                                    actions.addToFavorite(store.trips);
                                  }}
                                ></i>{" "}
                                {e.likes.length}{" "}
                              </span>
                            ) : (
                              <span className="fontprueba text-danger">
                                <i
                                  className="fas fa-heart"
                                  onClick={() => {
                                    actions.addToFavorite(store.trips);
                                  }}
                                ></i>{" "}
                                {e.likes.length}{" "}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : response.map((e) => {
              return (
                <div className="pepe" key={e.id}>
                  <Link
                    to={"/profile/" + e.user_id_of_trip_creator}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      className="avatar-picture ms-3"
                      src={e.profile_picture}
                      alt="user"
                    />
                    <div className="lolo">
                      <h2 className="">{e.username}</h2>
                    </div>
                  </Link>
                  <Link to={"/trip/" + e.id}>
                    <div
                      className="feed-card-image my-5 cardprueba position-relative"
                      style={{
                        backgroundImage: "url(" + e.destination_picture + ")",
                      }}
                    >
                      <div className="shadow-bottom-image"></div>
                      <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
                        <p className="destination-title-font">
                          <i className="fas fa-map-marker"></i> {e.destination}
                        </p>
                      </div>
                      <></>
                      <div className="card-body little-profile">
                        <div className="position-absolute top-50 start-0 translate-middle-y pro-img"></div>
                        <div className="information-user-box container position-absolute bottom-0 start-50 translate-middle-x mb-3">
                          <div className="d-flex justify-content-around">
                            <span className="">&#8205;</span>
                            <span className="a">
                              <i className="fas fa-clock"></i>{" "}
                              {moment(e.start_of_the_trip).format("LL")} -{" "}
                              {moment(e.end_of_the_trip).format("LL")}
                            </span>
                            <span className="">
                              <i className="fas fa-user-friends"></i> {e.people}{" "}
                            </span>
                            {!e.likes.includes(store.user_id) ? (
                              <span className="fontprueba">
                                <i
                                  className="fas fa-heart text-dark"
                                  onClick={() => {
                                    actions.addToFavorite(store.trips);
                                  }}
                                ></i>{" "}
                                {e.likes.length}{" "}
                              </span>
                            ) : (
                              <span className="fontprueba text-danger">
                                <i
                                  className="fas fa-heart"
                                  onClick={() => {
                                    actions.addToFavorite(store.trips);
                                  }}
                                ></i>{" "}
                                {e.likes.length}{" "}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    </Fragment>
  );
};
