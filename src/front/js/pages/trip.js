import React, { useContext } from "react";
import "../../styles/trip.css";

export const Trip = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
      <div className="d-flex justify-content-center">
        <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ "width": "18rem" }} />
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
          <div className="box position-static d-block  py-3" tabindex="-1" role="dialog" id="modalChoice">
            <h3>travel buddys</h3>
            {/*   card 2 */}
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ "background-image": "url('unsplash-photo-1.jpg')" }}>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                      </li>
                      <li className="d-flex align-items-center me-3">

                        <small>Earth</small>
                      </li>
                      <li className="d-flex align-items-center">

                        <small>3d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ "background-image": "url('unsplash-photo-2.jpg')" }}>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                      </li>
                      <li className="d-flex align-items-center me-3">

                        <small>Pakistan</small>
                      </li>
                      <li className="d-flex align-items-center">

                        <small>4d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ "background-image": "url('unsplash-photo-3.jpg')" }}>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                      </li>
                      <li className="d-flex align-items-center me-3">

                        <small>California</small>
                      </li>
                      <li className="d-flex align-items-center">

                        <small>5d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* contenedor de cards  */}
            <div className="cardBox d-flex justify-content-center m-3">
              <div className="card m-3" style={{ "width": "18rem" }}>
                <img src="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="card m-3" style={{ "width": "18rem" }}>
                <img src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="card m-3" style={{ "width": "18rem" }}>
                <img src="https://images.pexels.com/photos/1223343/pexels-photo-1223343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <h3>route</h3>
            <div className="m-3 d-flex justify-content-center">
              <div className="card m-3" style={{ "width": "60rem" }}>
                <img src="https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi2003/ihorbiliavskyi200300220/142866914-city-map-navigation-gps-navigator-distance-point-marker-icon-top-view-view-from-above-abstract-backg.jpg" className="card-img-top" alt="..." />
              </div>
            </div>
            <h3>more information</h3>
          </div>
        </div>

      </div>
    </>
  );
};
