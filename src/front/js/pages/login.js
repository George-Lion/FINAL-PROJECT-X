import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../component/img/traveland.png";

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
      <div className="mt-5 row justify-content-center align-items-center"></div>
      <div className="mt-5 mb-5 row justify-content-center align-items-center ">
        <div
          className="col-auto bg-ganger p-5 text-center"
          style={{ width: "500px" }}
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
              <div className="border border-1 mt-4 pt-3 pb-2 rounded">
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
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "220px" }}
      ></div>
    </Fragment>
  );
};
