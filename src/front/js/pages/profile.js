import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/profile.css";

export const Profile = () => {
  const { store } = useContext(Context);
  const rutes = [
    {
      id: 1,
      name: "Hawaii",
      image:
        "https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg",
    },
    {
      id: 2,
      name: "Paris",
      image:
        "https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg",
    },
    {
      id: 3,
      name: "Ibiza",
      image:
        "https://static3.leonoticias.com/www/multimedia/202107/06/media/MM-senderismo-asturias/oddle-1-ksRC--1350x900@El%20Comercio.jpg",
    },
  ];
  const profiles = [
    {
      id: 1,
      user_image:
        "https://a.wattpad.com/useravatar/JeniferNLuna.256.346438.jpg",
      fullname: "Amanda Lon",
      descrip: "Excelente persona, vivimos muchas aventuras juntas.",
    },
    {
      id: 2,
      user_image:
        "https://a.wattpad.com/useravatar/JeniferNLuna.256.346438.jpg",
      fullname: "Mauro Stiapa",
      descrip: "Excelente persona, vivimos muchas aventuras juntas.",
    },
    {
      id: 3,
      user_image:
        "https://a.wattpad.com/useravatar/JeniferNLuna.256.346438.jpg",
      fullname: "Lina Terekipa",
      descrip: "Excelente persona, vivimos muchas aventuras juntas.",
    },
  ];

  return (
    <div>
      <img
        src="https://i.pinimg.com/originals/1f/37/f4/1f37f4a57453aa29dc17deb798ac9d58.jpg"
        style={{ width: "100%" }}
      ></img>

      <div className="container">
        <img
          src="https://as01.epimg.net/meristation/imagenes/2021/03/15/noticias/1615808713_039343_1615808762_noticia_normal.jpg"
          style={{ width: "18rem" }}
          className="card-img-top"
          alt="..."
        />

        <h1>{store.user.name + " " + store.user.lastname}</h1>
        <h1>Username</h1>
        <p>
          I like meeting new people, going out and have a good time, forget
          about the day to day and live the moment, I love the sea.
        </p>

        <br />
        <h1>My Rutes</h1>
        <br />

        {/*rutes*/}
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {rutes.map((e) => {
            return (
              <div key={e.id} className="col">
                <Link style={{ textDecoration: "none" }} to="/trip">
                  <div
                    className="d-flex text-white bg-dark align-items-end"
                    style={{
                      minHeight: "400px",
                      backgroundImage: "url(" + e.image + ")",
                    }}
                  >
                    <div className="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                      <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                          <img
                            src="https://github.com/twbs.png"
                            alt="Bootstrap"
                            width="32"
                            height="32"
                            className="rounded-circle border border-white"
                          />
                        </li>
                        <li className="ms-2">
                          <h2>{e.name}</h2>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <br />
        <h1>Estas personas ya han viajado con {profiles.fullname}</h1>
        <br />

        {/*Profiles*/}
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {profiles.map((e) => {
            return (
              <div
                key={e.id}
                className="card p-3"
                style={{ backgroundColor: "#D7D7D7", maxWidth: "400px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={e.user_image}
                      className="img-fluid rounded-start"
                      alt="Imagenes Avatar"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                  <div className="col-md-6 ">
                    <div className="card-body">
                      <h5 className="card-title">{e.fullname}</h5>
                      <p className="card-text">
                        Exelente persona, vivimos muchas aventuras juntas.
                      </p>
                      <Link style={{ textDecoration: "none" }} to={"/profile"}>
                        <p className="card-text">
                          <small className="text-muted">Ver perfil</small>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};