import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



import "../../styles/trip.css";



export const Trip = () => {
  const { store, actions } = useContext(Context)
  useEffect(() => {
    actions.getTrip(1)
  }, [])


  const peopleCards = [
    {
      id: 1,
      name: "Yan Dupalok",
      image:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      name: "Amelia Treu",
      image:
        "https://images.pexels.com/photos/3435504/pexels-photo-3435504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      name: "Dana Silva",
      image:
        "https://images.pexels.com/photos/3579181/pexels-photo-3579181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 4,
      name: "Andre Rush",
      image:
        "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 5,
      name: "Carlos Blun",
      image:
        "https://images.pexels.com/photos/2599510/pexels-photo-2599510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },

  ];

  return (

    <>
      {/*Banner*/}
      <section className="user-perfil">
        <div className="contenedor-perfil">
          <div className="portada-perfil" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/161878/sydney-opera-house-harbor-city-sunset-161878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" + ")" }}>
            <div className="sombra"></div>
            <div className="avatar-perfil">
              <img src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img" />
            </div>
            <div className="datos-perfil">
              <h4 className="titulo-usuario"><i className="rute fas fa-map-marker-alt"></i>{store.trip.destination}</h4>
            </div>
            <div className="datos-button">
              <ul className="lista-perfil">
                <li><button type="button" className="mach-button btn btn-light ">
                  I'm in</button></li>
              </ul>
            </div>
            <div className="datos-like">
              <ul className="lista-perfil">
                <li>36 <i className="fas fa-heart" ></i></li>
              </ul>
            </div>
            <div className="opcciones-perfil">
              <button type="">change image</button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h3 className="text-center"><b><Link to="/profile" className="text-dark" style={{ textDecoration: 'none' }}>{store.trip.firstname} {store.trip.lastname}</Link></b></h3>
        <h5 className="text-center"><Link to="/profile" className="text-dark" style={{ textDecoration: 'none' }}>{store.trip.username}</Link></h5>
        <h5 className="text-dark text-center" >London - England</h5>
        <div className="container">
          <div className="placeDescription py-3 my-4 border-top border-bottom text-left justify-content-center">
            <p className="texto">Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat.</p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="features" ><i className="icon fas fa-clock"></i> August 12 - August 17</p>
            <p className="features"><i className="icon fas fa-user-friends"> </i>0/{store.trip.people}</p>
            <p className="features"><i className="icon fas fa-route"></i> {store.trip.transport}</p>
            <p className="features"><i className="icon fas fa-coins"></i> {store.trip.cost} €</p>
          </div>

          {/* información de viaje */}
          <div className="box position-static d-block py-3" tabIndex="-1" role="dialog" id="modalChoice">
            <h3 className="mt-2 text-dark text-center"><b>Travel buddys</b></h3>

            {/* CARDS */}

            <div className="wrapper">
              {peopleCards.map((e) => {
                return (
                  <div className="card1 rounded ">
                    <img
                      src={e.image}
                      className="img1 card-img-top"
                      alt="..."
                    />
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                        <b>{e.name}</b>
                      </li>
                      <li className=" d-flex align-items-center me-3">
                        <i class="fas fa-heart"></i>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* API RUTE */}
            <h3 className="m-3 text-dark text-center">route</h3>
            <div className="m-3 d-flex justify-content-center">
              <div className="card m-3" style={{ "width": "60rem" }}>
                <img src="https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi2003/ihorbiliavskyi200300220/142866914-city-map-navigation-gps-navigator-distance-point-marker-icon-top-view-view-from-above-abstract-backg.jpg" className="card-img-top" alt="..." />
              </div>
            </div>

            {/* información extendida del viaje */}
            <h3>more information</h3>
            <div className="container px-4 py-5" id="featured-3">
              <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                  <div className="feature-icon bg-primary bg-gradient">
                  </div>
                  <h2>Featured title</h2>
                  <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                  <a href="#" className="icon-link">
                    Call to action
                  </a>
                </div>
                <div className="feature col">
                  <div className="feature-icon bg-primary bg-gradient">
                  </div>
                  <h2>Featured title</h2>
                  <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                  <a href="#" className="icon-link">
                    Call to action
                  </a>
                </div>
                <div className="feature col">
                  <div className="feature-icon bg-primary bg-gradient">
                  </div>
                  <h2>Featured title</h2>
                  <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                  <a href="#" className="icon-link">
                    Call to action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};