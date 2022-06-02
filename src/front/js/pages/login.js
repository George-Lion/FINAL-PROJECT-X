import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

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
      console.log(user);
      if (data.token) {
        localStorage.setItem("token", data.token);
        actions.verify();
        history.push("/feed");
      } else {
        alert("Email o contraseña incorrectos.");
      }
    } catch (e) {
      alert("ERROR");
    }
  };

  return (
    <div className="bg">
      <br></br>
      <div className="text-center mx-auto">
        <h1 className="mb-5 pt-4">LOGIN</h1>
        <div className="row mx-auto w-75">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          ></input>
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          ></input>
        </div>
        <button
          className="btn btn-light mt-3 pb-1"
          onClick={() => {
            loginUser();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
