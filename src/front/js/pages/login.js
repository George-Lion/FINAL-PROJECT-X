import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";
import "../../styles/loginAndRegister.css";
import logo from "../component/img/traveland.png";
export const Login = () => {

  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [switchPanel, setSwitchPanel] = useState(false)

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
      alert("ERROR");
    }
  };

  const sendUserInfo = async () => {
    const response = await fetch(store.url + "register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (data.created) {
      press2();
    }
  };

  return (
    <Fragment>
      <div className="body-all">
        <div className={"container-1 " + (switchPanel == true ? "right-panel-active" : "false")} id="container">
          <div className="form-container sign-up-container">
            <form className="form-move" action="#">
              <h1 style={{
                fontWeight: "bold",
                margin: "0"
              }}>Create Account</h1>
              <div className="social-container">
              </div>
              <span className="span-box">or use your email for registration</span>
              <input type="text" className="inp-data" placeholder="Username" onChange={(e) =>
                setUser({ ...user, username: e.target.value.trim() })
              } />
              <input type="email" className="inp-data" placeholder="Email" onChange={(e) =>
                setUser({ ...user, email: e.target.value.trim() })
              } />
              <input type="password" className="inp-data" placeholder="Password" onChange={(e) =>
                setUser({ ...user, password: e.target.value.trim() })
              } />
              <input type="text" className="inp-data" placeholder="First name" onChange={(e) =>
                setUser({ ...user, firstname: e.target.value.trim() })
              } />
              <input type="text" className="inp-data" placeholder="Last name" onChange={(e) =>
                setUser({ ...user, lastname: e.target.value.trim() })
              } />
              <button className="button-all mt-2" onClick={() => {
                sendUserInfo();
              }}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form-move" action="#">
              <h1 style={{
                fontWeight: "bold",
                margin: "0"
              }}>Sign in</h1>
              <div className="social-container">
              </div>
              <span className="span-box">or use your account</span>
              <input type="email" className="inp-data" placeholder="Email" onChange={(e) => {
                setUser({ ...user, email: e.target.value.trim() });
              }} />
              <input type="password" className="inp-data" placeholder="Password" onChange={(e) => {
                setUser({ ...user, password: e.target.value.trim() });
              }} />
              <a className="social" href="#">Forgot your password?</a>
              <button className="button-all" onClick={() => {
                loginUser();
              }}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <div className="img-left"></div>
                <h1 style={{
                  fontWeight: "bold",
                  margin: "0"
                }}>Welcome Back!</h1>
                <p className="text-instruction">To keep connected with us please login with your personal info</p>
                <button className="button-all ghost" id="signIn" onClick={() => {
                  setSwitchPanel(false)
                }}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <img
                  className="logo-t mb-4 pb-4 pt-2 col-12"
                  src={logo}
                  alt=""
                />
                <h1 style={{
                  fontWeight: "bold",
                  margin: "0"
                }}>Hello, Friend!</h1>
                <p className="text-instruction">Enter your personal details and start journey with us</p>
                <button className="button-all ghost" id="signUp" onClick={() => {
                  setSwitchPanel(true)
                }}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

