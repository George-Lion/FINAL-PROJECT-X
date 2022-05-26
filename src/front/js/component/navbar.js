import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
/* import "../../styles/navbar.css"; */

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark ">
      {store.logged != null ? (
        <div className="container">
          <Link to="/feed">
            <span className="navbar-brand mb-0 h1 text-light">HOME</span>
          </Link>
          {store.logged == true ? (
            <Link to="/feed" className="h2 text-light ">
              <i className="fas fa-suitcase-rolling"></i>
            </Link>
          ) : null}
          {store.logged == true ? (
            <Link to="/trip" className="h2 text-light ">
              <i className="fas fa-map-marker-alt"></i>
            </Link>
          ) : null}
          {store.logged == true ? (
            <div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user-alt"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link to="/profile" className="">
                    <li>Profile</li>
                  </Link>
                  <Link to="/help" className="">
                    <li> Ayuda</li>
                  </Link>
                  <Link to="/login">
                    <li onClick={() => actions.logout()}>Logout</li>
                  </Link>
                </ul>
              </div>
            </div>
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

        </div>
      ) : null}
    </nav>
  );
};
