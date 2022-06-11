import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../styles/feed.css";

export const Favorites = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getUser();
  }, []);

  return (
    <div>
      <div className="container">
        {store.user.likes && store.user.likes.length > 0
          ? store.user.likes.map((e) => {
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
                  {!e.likes.includes(store.user_id) ? (
                    <span className="fontprueba corazon-like">
                      <i
                        className="fas fa-heart text-dark"
                        onClick={() => {
                          actions.changeFavorite(e.id, "feed");
                        }}
                      ></i>{" "}
                      {e.likes.length}{" "}
                    </span>
                  ) : (
                    <span className="fontprueba corazon-like">
                      <i
                        className="fas fa-heart text-danger"
                        onClick={() => {
                          actions.changeFavorite(e.id, "feed");
                        }}
                      ></i>{" "}
                      {e.likes.length}{" "}
                    </span>
                  )}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : "No favorites"}
      </div>
    </div>
  );
};
