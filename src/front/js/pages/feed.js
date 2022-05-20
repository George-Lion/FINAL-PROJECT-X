import React, { useContext } from "react";
import "../../styles/feed.css";

export const Feed = () => {
  return (
    <>
      <div className="container position-relative">
        <div className="my-4 justify-content-center card ">
          <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
            <span>
              <i class="fas fa-map-marker"></i> Islas Malvinas
            </span>
          </div>
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800"
            alt="Banner"
          />
          <div className="card-body little-profile">
            <div className="position-absolute top-50 start-0 translate-middle-y pro-img">
              <img
                className="ms-3"
                src="https://i.imgur.com/8RKXAIV.jpg"
                alt="user"
              />
            </div>
            <div className="container">
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
                <h3 className="">Brad Macullam</h3>
              </div>

              <div className="d-flex justify-content-around">
                <span className="">Web Designer &amp; Developer</span>
                <span className="">
                  <i className="fas fa-clock"></i> August 4 - August 10 &amp;
                  Developer
                </span>
                <span className="">
                  <i class="fas fa-user-friends"></i> 2 - 6{" "}
                </span>
                <span className="">
                  <i class="fas fa-heart"></i> 76{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
