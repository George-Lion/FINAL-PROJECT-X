import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import image from "./img/traveland.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [showFavorite, setShowFavorite] = useState(false);

  return (
    <header>
      <div className="nav-traveland text-white ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/feed"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img src={image} alt="logo" className="logo" />
            </Link>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li className="pt-2">
                <Link
                  to="/feed"

                  className="navbar-icon me-4 text-light "
                >
                  <i className="ras fas fa-suitcase-rolling"></i>
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  to="/myTrips/"

                  className="navbar-icon me-4 text-light "
                >
                  <i className="ras fas fa-map-marker-alt"></i>
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  to="/message"

                  className="navbar-icon me-4 text-light "
                >  {store.match && store.match.length > 0 && store.match.filter((x) => x.read != true).length > 0 ? store.match.filter((x) => x.read != true).length : null}
                  <i className="ras fas fa-envelope"></i>
                </Link>
              </li>

              <li className="pt-2">
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
                    className="dropdown-menu text-small mt-2"
                    aria-labelledby="dropdownUser1"
                  >
                    <li className="link-title ps-3 pb-1">
                      Hola <b>{store.user.firstname}</b>
                    </li>
                    <Link
                      to={"/profile/" + store.user_id}

                      className="link-styles">
                      <li className="nav-links ps-3">Profile</li>
                    </Link>
                    <Link to="/favorites" className="link-styles">
                      <li className="nav-links ps-3">Favorites</li>
                    </Link>
                    <Link to="/help" className="link-styles">
                      <li className="nav-links ps-3">Help</li>
                    </Link>
                    <li className="ps-3">
                      <hr className="dropdown-divider" />
                    </li>
                    <Link to="/" className="link-styles">
                      <li>
                        <p
                          className="nav-links dropdown-item"
                          onClick={() => actions.logout()}
                        >
                          Sign out
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
