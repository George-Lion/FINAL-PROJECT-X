import React, { useContext } from "react";
import "../../styles/feed.css";

export const Feed = () => {
  return (
    <>
      <div className="container">
        <div className="mt-4">
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
                <p>Web Designer &amp; Developer</p>{" "}
                <a
                  href="javascript:void(0)"
                  className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                  data-abc="true"
                >
                  Follow
                </a>
              </div>
              <div className="row text-center m-t-20">
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">10434</h3>
                  <small>Articles</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">434K</h3>
                  <small>Followers</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">5454</h3>
                  <small>Following</small>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
