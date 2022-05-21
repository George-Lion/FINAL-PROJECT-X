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
        "https://p4.wallpaperbetter.com/wallpaper/738/177/106/space-galaxy-vertical-portrait-display-wallpaper-preview.jpg",
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
        "https://www.xtrafondos.com/wallpapers/vertical/atardecer-en-la-montanas-ilustracion-6348.jpg",
    },
    {
      id: 4,
      name: "Valencia",
      image:
        "https://www.xtrafondos.com/wallpapers/vertical/paisaje-digital-en-atardecer-5846.jpg",
    },
    {
      id: 5,
      name: "Burriana",
      image:
        "https://static3.leonoticias.com/www/multimedia/202107/06/media/MM-senderismo-asturias/oddle-1-ksRC--1350x900@El%20Comercio.jpg",
    },
    {
      id: 6,
      name: "Alicante",
      image:
        "https://i.pinimg.com/originals/8a/d1/90/8ad1907008c01385d53aeb3108eb1630.jpg",
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
        src="https://wallpaperaccess.com/full/6584451.jpg"
        style={{ width: "100%" }}
      ></img>

      <div className="container">
        <div className="container">
          <div className="position-relative">
            <div className="position-absolute" style={{ bottom: "-150px" }}>
              <img
                src="https://as01.epimg.net/meristation/imagenes/2021/03/15/noticias/1615808713_039343_1615808762_noticia_normal.jpg"
                style={{
                  width: "250px",
                  height: "250px",
                }}
                className="card-img-top rounded-circle border border-white border border-5"
                alt="..."
              />
              <h1 style={{ fontSize: "30px" }}>
                {store.user.city + " - " + store.user.country}
              </h1>
            </div>
          </div>

          <div className="position-relative">
            <div
              className="position-absolute"
              style={{ left: "340px", bottom: "-250px" }}
            >
              <h1 className="text-start" style={{ fontSize: "80px" }}>
                {store.user.name + " " + store.user.lastname}
              </h1>

              <h1 className="text-start" style={{ fontSize: "60px" }}>
                {store.user.username}
              </h1>

              <p className="text-start" style={{ fontSize: "34px" }}>
                I like meeting new people, going out and have a good time,
                forget about the day to day and live the moment, I love the sea.
              </p>
            </div>
          </div>
        </div>

        <br />
        <div style={{ marginTop: "300px" }}>
          <h1>My Rutes</h1>

          <br />

          {/*rutes*/}
          <div className="row row-cols-1 align-items-stretch g-4 py-5">
            <div className="d-flex overflow-auto">
              {rutes.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="col container"
                    style={{ width: "800px" }}
                  >
                    <Link style={{ textDecoration: "none" }} to="/trip">
                      <div
                        className="d-flex text-white bg-dark align-items-end"
                        style={{
                          minHeight: "400px",
                          minWidth: "300px",
                          display: "block",
                          backgroundImage: "url(" + e.image + ")",
                        }}
                      >
                        <div className="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                          <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                              <i className="fas fa-map-marker-alt fs-3 m-2"></i>
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
          </div>

          <br />
          <h1>Estas personas ya han viajado con {profiles.fullname}</h1>
          <br />

          {/*Profiles*/}
          <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-between g-4 py-5">
            {profiles.map((e) => {
              return (
                <div
                  key={e.id}
                  className="card m-2"
                  style={{
                    backgroundColor: "#D7D7D7",
                    width: "400px",
                    height: "180px",
                  }}
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
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/profile"}
                        >
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
    </div>
  );
};
