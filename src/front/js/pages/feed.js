import React, { useContext } from "react";
import "../../styles/feed.css";

export const Feed = () => {
  return (
    <>
      <div className="container">
        <div className="my-4">
          <div className="justify-content-center">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800"
                alt="Banner"
              />
              <div className="card-body little-profile text-center">
                <div className="pro-img">
                  <img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
                </div>
                <h3 className="m-b-0">Brad Macullam</h3>
                <div className="d-flex justify-content-around">
                  <span className="">Web Designer &amp; Developer</span>
                  <span className="">
                    <i class="fa-solid fa-clock"></i>Web Designer &amp;
                    Developer
                  </span>
                  <span className="">Web Designer &amp; Developer</span>
                  <span className="">Web Designer &amp; Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
