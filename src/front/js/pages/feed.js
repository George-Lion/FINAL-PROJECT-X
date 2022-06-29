import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../styles/feed.css";

export const Feed = () => {
  const [searchTerm, setSearchTerm] = useState({ destination: "" });
  const { actions, store } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    actions.getTrips();
    actions.getUserTrips();
    actions.verify();
  }, []);

  return (
    <Fragment>
      <div className="footer-abajo">
        <div className="search-back">
          <nav className="search-style navbar mt-5 mb-4">
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
                      actions.searchDestination(searchTerm);
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
                      actions.searchDestination(searchTerm);
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
                      actions.searchDestination(searchTerm);
                    }
                  }}
                  onChange={(e) => {
                    setSearchTerm({ ...searchTerm, end_date: e.target.value });
                  }}
                />
                <button
                  className="search-button btn "
                  type="button"
                  onClick={() => {
                    actions.searchDestination(searchTerm);
                  }}
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container">
          {store.trips.map((e) => {
            return (
              <div className="feed-box" key={e.id}>
                <div className=""></div>
                <div className="ul-feed d-flex">
                  <div className="il-time text-white">
                    <i className="fas fa-clock"></i>{" "}
                    {moment(e.start_of_the_trip).format("LL")} -{" "}
                    {moment(e.end_of_the_trip).format("LL")}
                  </div>
                  <div className="il-feed text-white">
                    <i className="fas fa-user-friends"></i> {e.people}{" "}
                  </div>
                  {!e.likes.includes(store.user_id) ? (
                    <div className="il-feed text-white">
                      <i
                        className="fas fa-heart me-2"
                        onClick={() => {
                          actions.changeFavorite(e.id, "feed", searchTerm);
                        }}
                      ></i>
                      {e.likes.length}
                    </div>
                  ) : (
                    <div className="il-feed fontprueba corazon-like text-white">
                      <i
                        className="fas fa-heart text-danger me-2"
                        onClick={() => {
                          actions.changeFavorite(e.id, "feed", searchTerm);
                        }}
                      ></i>
                      {e.likes.length}
                    </div>
                  )}
                </div>

                {/*  INFORMATION */}

                <Link
                  to={
                    e.user_id_of_trip_creator == store.user_id
                      ? "/profile/" + e.user_id_of_trip_creator
                      : "/noEditProfile/" + e.user_id_of_trip_creator
                  }
                  style={{ textDecoration: "none", fontWeight: "900" }}
                >
                  <img
                    className="image-user ms-3"
                    src={e.profile_picture}
                    alt="user"
                  />
                  <div className="trip-box">
                    <h2 className="user-name">{e.username}</h2>
                  </div>
                </Link>

                <Link to={"/trip/" + e.id}>
                  <div
                    className="img-content position-relative"
                    style={{
                      backgroundImage: "url(" + e.destination_picture + ")",
                    }}
                  >
                    <div className="shadow1-image1"></div>
                    <div className="shadow2-image2"></div>
                    <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
                      <p className="destination-title1">
                        <i className="fas fa-map-marker-alt"></i> {e.destination}
                      </p>
                    </div>
                    <></>
                  </div>
                </Link>
              </div>
            );
          })}
          <button className="scroll-top"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            Scroll to top
          </button>
        </div>

      </div>
    </Fragment>
  );
};
