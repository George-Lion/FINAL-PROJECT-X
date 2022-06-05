import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import image from "./img/traveland.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getUser();
  }, []);

  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/feed"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img src={image} alt="logo" className="logo" />
            </Link>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {store.logged == true ? (
                <li>
                  <Link to="/feed" className="navbar-icon me-4 text-light ">
                    <i className="fas fa-suitcase-rolling"></i>
                  </Link>
                </li>
              ) : null}
              {store.logged == true ? (
                <li>
                  <Link to="/trip/" className="navbar-icon me-4 text-light ">
                    <i className="fas fa-map-marker-alt"></i>
                  </Link>
                </li>
              ) : null}
              {store.logged == true ? (
                <li>
                  <Link to="/message" className="navbar-icon me-4 text-light ">
                    <i className="fas fa-envelope"></i>
                  </Link>
                </li>
              ) : null}
              {store.logged == true ? (
                <li>
                  <div className="dropdown text-end ">
                    <p
                      href="#"
                      className="d-block link-light text-decoration-none dropdown-toggle"
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={store.user.profile_picture}
                        alt="mdo"
                        width="45"
                        height="45"
                        className="rounded-circle"
                      />
                    </p>
                    <ul
                      className="dropdown-menu text-small"
                      aria-labelledby="dropdownUser1"
                    >
                      <li className="ps-3 pb-1">
                        Hola <b>{store.user.firstname}</b>
                      </li>
                      <li className="ps-3">Create Trip</li>
                      <Link to="/profile">
                        <li className="ps-3">Profile</li>
                      </Link>
                      <Link to="/help">
                        <li className="ps-3">Help</li>
                      </Link>
                      <li className="ps-3">
                        <hr className="dropdown-divider" />
                      </li>
                      <Link to="/login">
                        <li>
                          <p
                            className="dropdown-item"
                            onClick={() => actions.logout()}
                          >
                            Sign out
                          </p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              ) : (
                <div>
                  <Link to="/login" className="me-3">
                    <button className="btn btn-light">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-light">Register</button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
