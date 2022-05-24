import React, { useContext } from "react";
import { Link } from "react-router-dom";


import "../../styles/trip.css";

export const Trip = () => {

  const peopleCards = [
    {
      id: 1,
      name: "Daniel",
      image:
        "https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Amelia",
      image:
        "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      name: "Carlos",
      image:
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn2.civitatis.com/zonas/madeira/madeira.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn2.civitatis.com/zonas/madeira/madeira.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn2.civitatis.com/zonas/madeira/madeira.jpg" className="d-block w-100" alt="..." />
          </div>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      <div className="d-flex justify-content-center ">
        <img className="rounded-circle z-depth-2 card-img-top" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" style={{ "width": "18rem" }} data-holder-rendered="true" />
      </div>


      <div className="text-center">
        <h4 >Andrea Village</h4>
        <h5 >@LaAndre</h5>
        <h5 >London - England</h5>
        <div className="container">
          <div className="placeDescription py-3 my-4 border-top border-bottom ">
            <p className="textDescription ">It is one of my favorite sites, to enjoy and clear the daily routine, cheer up, I await your requests, It is one of my favorite sites, to enjoy and clear the daily routine, cheer up, I await your requests.</p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="features" ><i className="icon fas fa-clock"></i> August 12 - August 17</p>
            <p className="features"><i className="icon fas fa-user-friends"> </i>2-4</p>
            <p className="features"><i className="icon fas fa-route"></i> Car</p>
            <p className="features"><i className="icon fas fa-coins"></i> 600€</p>
          </div>
          {/* información de viaje */}
          <div className="box position-static d-block py-3" tabIndex="-1" role="dialog" id="modalChoice">
            <h3 className="mt-2">travel buddys</h3>

            {/*   CARDS */}
            <div className="mt-3 d-flex justify-content-center">
              {peopleCards.map((e) => {
                return (
                  <div key={e.id}>
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg m-3" style={{ backgroundImage: "url(" + e.image + ")" }}>
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                        <ul className="d-flex list-unstyled mt-auto">

                          <li className="me-auto">
                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                            <h3>{e.name}</h3>
                          </li>
                          <li className="d-flex align-items-center me-3">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>


            {/* API RUTE */}

            <h3>route</h3>
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




