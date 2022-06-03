import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../component/img/traveland.png";

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
    <>
      <div className="d-flex justify-content-center mt-5">
        <img
          className="row me-3"
          src="https://images.pexels.com/photos/2679814/pexels-photo-2679814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="text-center" style={{ width: "500px" }}>
          <main className="for-signin">
            <form className="">
              <div className="rounded border border-secondary p-4">
                <div className="p-4">
                  <img className="mb-4 col-9 " src={Logo} alt="Logo"></img>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control mb-3"
                    id="floatingInput"
                    type="text"
                    placeholder="username"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control mb-3"
                    id="floatingFirstName"
                    type="text"
                    placeholder="firstname"
                    onChange={(e) =>
                      setUser({ ...user, firstname: e.target.value })
                    }
                  />
                  <label htmlFor="floatingFirstName">First name</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control mb-3"
                    id="floatingLastName"
                    type="text"
                    placeholder="lastname"
                    onChange={(e) =>
                      setUser({ ...user, lastname: e.target.value })
                    }
                  />
                  <label htmlFor="floatingLastName">Last name</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control mb-3"
                    id="floatingEmail"
                    type="email"
                    placeholder="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control mb-3"
                    id="floatingPassword"
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <Link to="/login">
                  <button
                    className="w-50 btn btn-primary mt-3"
                    onClick={() => {
                      sendUserInfo();
                    }}
                  >
                    Sign up
                  </button>
                </Link>
                <p className="mt-2 text-center pt-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
              </div>
              <div className="rounded border border-secondary mt-4">
                <p className="text-center pb-1 p-3">
                  Do you have an account?{" "}
                  <strong>
                    <Link
                      className=""
                      to="/login"
                      style={{ textDecoration: "none" }}
                    >
                      Login
                    </Link>
                  </strong>
                </p>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};
