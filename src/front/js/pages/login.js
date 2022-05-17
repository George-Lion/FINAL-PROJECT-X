import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const sendUserInfo = async () => {
    if (user.email != null && user.email.trim() != "") {
      setError(null);
      const response = await fetch(
        "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu45.gitpod.io/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.logged == false) {
        setError("Bad info");
        setTimeout(() => {
          setError(null);
        }, 2000);
      } else if (data.logged == true) {
        actions.setUser(data.user);
        history.push("/feed");
      }
    } else {
      setError("Bad info");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <div className="text-center mt-5">
      <h1 className="m-5">LOGIN</h1>
      <div className="">
        <h5 htmlFor="email" className="m-2">
          Email
        </h5>
        <input
          id="email"
          className="col-2 mb-3"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <br />
        <h5 htmlFor="password" className="">
          Password
        </h5>
        <input
          id="password"
          className="col-2"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <br />
        <button
          className="col-1 mt-3 btn-primary"
          onClick={() => sendUserInfo()}
        >
          Login
        </button>
      </div>
      {error != null ? <h3 className="text-danger">{error}</h3> : null}
    </div>
  );
};
