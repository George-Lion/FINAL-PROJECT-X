import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});
  const { store } = useContext(Context);
  const history = useHistory();

  const sendUserInfo = async () => {

    const response = await fetch(store.url + "register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    
    const data = await response.json();
    if (data.created) {
      history.push("/login");
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <label htmlFor="email" className="col-1">
          username
        </label>
        <input
          id="username"
          className="col-3"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        ></input>
        <label htmlFor="firstname" className="col-1">
          firstname
        </label>
        <input
          id="firstname"
          className="col-3"
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
        ></input>
        <label htmlFor="lastname" className="col-1">
          lastname
        </label>
        <input
          id="lastname"
          className="col-3"
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        ></input>
        <label htmlFor="email" className="col-1">
          Email
        </label>
        <input
          id="email"
          className="col-3"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password" className="col-1">
          Password
        </label>
        <input
          id="password"
          className="col-3"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <label htmlFor="city_of_residence" className="col-1">
          city_of_residence
        </label>
        <input
          id="city_of_residence"
          className="col-3"
          onChange={(e) =>
            setUser({ ...user, city_of_residence: e.target.value })
          }
        ></input>

        <button className="col-2 offset-1" onClick={() => sendUserInfo()}>
          Register new user
        </button>
      </div>
    </div>
  );
};
