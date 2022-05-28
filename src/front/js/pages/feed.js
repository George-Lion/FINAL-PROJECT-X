import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.css";
import { Link } from "react-router-dom";
import moment from "moment";

export const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getTrips();
  }, []);

  return (
    <>
      <nav className="navbar mt-2">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search_input"
              type="text"
              placeholder="Search destination"
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <input
              className="form-control me-2"
              type="date"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        {searchTerm == ""
          ? store.trips.map((e) => {
              return (
                <Link to={"/trip/" + e.id} key={e.id}>
                  <div
                    className="my-5 cardprueba position-relative"
                    style={{
                      backgroundImage: "url(" + e.destination_picture + ")",
                    }}
                  >
                    <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
                      <h3 className="fontprueba prueba2">
                        <i className="fas fa-map-marker"></i> {e.destination}
                      </h3>
                    </div>
                    <></>
                    <div className="card-body little-profile">
                      <div className="position-absolute top-50 start-0 translate-middle-y pro-img">
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                          <img
                            className="prueba3 ms-3"
                            src={e.profile_picture}
                            alt="user"
                          />
                        </Link>
                      </div>
                      <div className="container position-absolute bottom-0 start-50 translate-middle-x mb-3">
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                          <h3 className="fontprueba prueba2 ms-2">
                            {e.username}
                          </h3>
                        </Link>

                        <div className="d-flex justify-content-around">
                          <span className="fontprueba">&#8205;</span>
                          <span className="fontprueba">
                            <i className="fas fa-clock"></i>{" "}
                            {moment(e.start_of_the_trip).format("LL")} -{" "}
                            {moment(e.end_of_the_trip).format("LL")}
                          </span>
                          <span className="fontprueba">
                            <i className="fas fa-user-friends"></i> {e.people}{" "}
                          </span>
                          <span className="fontprueba">
                            <i className="fas fa-heart"></i> {e.likes}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : store.trips
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.destination
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((e) => {
                return (
                  <Link to={"/trip/" + e.id} key={e.id}>
                    <div
                      className="my-5 cardprueba position-relative"
                      style={{
                        backgroundImage: "url(" + e.destination_picture + ")",
                      }}
                    >
                      <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
                        <h3 className="fontprueba prueba2">
                          <i className="fas fa-map-marker"></i> {e.destination}
                        </h3>
                      </div>
                      <></>
                      <div className="card-body little-profile">
                        <div className="position-absolute top-50 start-0 translate-middle-y pro-img">
                          <Link
                            to="/profile"
                            style={{ textDecoration: "none" }}
                          >
                            <img
                              className="prueba3 ms-3"
                              src={e.profile_picture}
                              alt="user"
                            />
                          </Link>
                        </div>
                        <div className="container position-absolute bottom-0 start-50 translate-middle-x mb-3">
                          <Link
                            to="/profile"
                            style={{ textDecoration: "none" }}
                          >
                            <h3 className="fontprueba prueba2 ms-2">
                              {e.username}
                            </h3>
                          </Link>

                          <div className="d-flex justify-content-around">
                            <span className="fontprueba">&#8205;</span>
                            <span className="fontprueba">
                              <i className="fas fa-clock"></i>{" "}
                              {moment(e.start_of_the_trip).format("LL")} -{" "}
                              {moment(e.end_of_the_trip).format("LL")}
                            </span>
                            <span className="fontprueba">
                              <i className="fas fa-user-friends"></i> {e.people}{" "}
                            </span>
                            <span className="fontprueba">
                              <i className="fas fa-heart"></i> {e.likes}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
      </div>
    </>
  );
};
