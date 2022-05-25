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
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                  </Link>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <Link to="/login">
                    <li onClick={() => actions.logout()}><a className="dropdown-item" href="#">Logout</a></li>
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
