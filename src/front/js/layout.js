import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import { Feed } from "./pages/feed";
import { Trip } from "./pages/trip";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";
import { Message } from "./pages/message";
import { MyTrips } from "./pages/myTrips";
import { Help } from "./pages/help";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const { store } = useContext(Context);
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {store.logged == true ? <Navbar /> : null}
          <div>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/feed">
                {store.logged == true ? (
                  <Feed />
                ) : (
                  <Redirect to="/login"></Redirect>
                )}
              </Route>
              <Route exact path="/home">
                <Feed />
              </Route>
              <Route exact path="/profile">
                {store.logged == true ? (
                  <Profile />
                ) : (
                  <Redirect to="/login"></Redirect>
                )}
              </Route>
              <Route exact path="/trip/:id">
                <Trip />
              </Route>
              <Route exact path="/message">
                <Message />
              </Route>
              <Route exact path="/mytrips">
                <MyTrips />
              </Route>
              <Route exact path="/help">
                <Help />
              </Route>
              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
