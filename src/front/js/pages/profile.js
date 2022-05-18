import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile.css";

export const Profile = () => {
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
      name_id: 1,
      user_image:
        "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png",
      fullname: "Amanda Lon",
      descrip: "Excelente persona, vivimos muchas aventuras juntas.",
    },
    {
      name_id: 2,
      user_image:
        "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
      fullname: "Amanda Lon",
      descrip: "Excelente persona, vivimos muchas aventuras juntas.",
    },
    {
      name_id: 3,
      user_image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      fullname: "Amanda Lon",
      descrip: "Excelente persona, vivimos muchas aventuras juntas.",
    },
  ];

  return (
    <div className="container">
      <img
        src="https://as01.epimg.net/meristation/imagenes/2021/03/15/noticias/1615808713_039343_1615808762_noticia_normal.jpg"
        style={{ height: "10rem", width: "12rem" }}
        className="card-img-top"
        alt="..."
      />
      <h1>Andrea Village</h1>
      <h1>Username</h1>
      <p>
        I like meeting new people, going out and have a good time, forget about
        the day to day and live the moment, I love the sea.
      </p>
      <br />
      <h1>My Rutes</h1>
      <br />
      <div className="row justify-content-center">
        {rutes.map((e) => {
          return (
            <Link key={e.id} to="/trip">
              <div className="card" style={{ height: "24rem", width: "18rem" }}>
                <img src={e.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <br />
      <h1>Estas personas ya han viajado con {profiles.fullname}</h1>
      <br />

      <div className="container">
        <div className="align-items-start">
          {profiles.map((x) => {
            return (
              <Link key={x.name_id} to="/profile">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={x.user_image} className="card-img-left" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{x.fullname}</h5>
                  </div>
                  <p className="card-body">{x.descrip}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
