import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../component/img/traveland.png";
import photo from "../component/img/login-photo.png";
import "../../styles/login.css";

export const Login = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});

  const loginUser = async () => {
    try {
      const resp = await fetch(store.url + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await resp.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        await actions.verify();
        history.push("/feed");
      } else {
        alert("Email o contraseña incorrectos.");
      }
    } catch (e) {
      console.log(e);
      alert("ERROR");
    }
  };

  return (
    <Fragment>
      <div className="footer-abajo">
        <div className="d-flex justify-content-center">
          <div className="card-login-image">
            <div className="shadow-card-login"></div>
            <p className="login-title">
              <i className="fas fa-map-marker-alt"></i> Petra
            </p>
            <div className="box-user-information">
              <ul className="list-unstyled list-group list-group-horizontal">
                <li>
                  <img className="image-user-login" src={photo} />
                </li>
                <li className="pt-2">
                  <h3 className="pt-5">Amanda Girona</h3>
                </li>
              </ul>
              <ul className="list-unstyled list-group list-group-horizontal ps-2">
                <li className="me-4">
                  <p className="">
                    <i className="fas fa-clock"></i> July, 23 - August, 3
                  </p>
                </li>
                <li className="me-4">
                  <p className="">
                    <i className="fas fa-user-friends"></i> 3/4
                  </p>
                </li>
                <li className="me-4">
                  <p className="">
                    <i className="fas fa-route"></i> Airplane
                  </p>
                </li>
              </ul>
            </div>
            <img
              className="image-login row me-3"
              src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="mt-5 row justify-content-center align-items-center"></div>
          <div className="content-form mt-5 mb-5 row justify-content-center align-items-center ">
            <div
              className="col-auto bg-ganger p-5 text-center"
              style={{ width: "480px" }}
            >
              <main className="form-signin">
                <form className="">
                  <div className="border border-1 p-4 rounded">
                    <div className="p-5 pb-0 pt-0">
                      <img className="mb-4 pb-4 pt-4 col-12" src={logo} alt="" />
                    </div>
                    <div className="form-floating mb-2 ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setUser({ ...user, email: e.target.value });
                        }}
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => {
                          setUser({ ...user, password: e.target.value });
                        }}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-primary mb-4 mt-2"
                      type="submit"
                      onClick={() => {
                        loginUser();
                      }}
                    >
                      Login
                    </button>
                    <div className="checkbox mb-2 mx-center">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                      </label>
                    </div>
                  </div>
                  <div className="border border-1 mt-4 pt-3 pb-2 mb-5 rounded">
                    <p className="text-center">
                      You do not have an account?
                      <Link
                        className="text-primary"
                        to="/register"
                        style={{ textDecoration: "none" }}
                      >
                        <strong> Sign up</strong>
                      </Link>
                    </p>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
