import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.css";
import { Link } from "react-router-dom";

export const Feed = () => {
  const trips = [
    {
      id: 1,
      destination: "Falkland Islands",
      imageDestination:
        "https://images.pexels.com/photos/3125852/pexels-photo-3125852.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      organizer: "Brad Macullam",
      organizerPic: "i.imgur.com/8RKXAIV.jpg",
      dates: "March 31 - April 5",
      participants: "5 - 6",
      likes: "18",
    },
    {
      id: 2,
      destination: "Phi Phi Islands",
      imageDestination:
        "https://images.pexels.com/photos/7027650/pexels-photo-7027650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      organizer: "John Doe",
      organizerPic:
        "images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      dates: "October 17 - October 20",
      participants: "2 - 3",
      likes: "18",
    },
    {
      id: 3,
      destination: "Amsterdam",
      imageDestination:
        "https://images.pexels.com/photos/1329510/pexels-photo-1329510.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      organizer: "Laura Riviera",
      organizerPic:
        "images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
      dates: "January 15 - January 19",
      participants: "2 - 3",
      likes: "25",
    },
    {
      id: 4,
      destination: "Petra",
      imageDestination:
        "https://images.pexels.com/photos/7419585/pexels-photo-7419585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      organizer: "Rick Howard",
      organizerPic:
        "images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
      dates: "May 05 - May 10",
      participants: "3 - 4",
      likes: "25",
    },
  ];

  return (
    <>
      <nav className="navbar bg-light mt-2">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Destination"
              aria-label="Search"
            />
            <input
              className="form-control me-2"
              type="date"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container ">
        {trips.map((e) => {
          return (
            <div
              key={e.id}
              className="my-5 card position-relative"
              style={{
                backgroundImage: "url(" + e.imageDestination + ")",
              }}
            >
              <div className="d-flex me-5 position-absolute top-0 end-0 mt-3">
                <h3>
                  <i className="fas fa-map-marker"></i> {e.destination}
                </h3>
              </div>
              <></>
              <div className="card-body little-profile">
                <div className="position-absolute top-50 start-0 translate-middle-y pro-img">
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <img
                      className="ms-3"
                      src={"https://" + e.organizerPic}
                      alt="user"
                    />
                  </Link>
                </div>
                <div className="container position-absolute bottom-0 start-50 translate-middle-x mb-3">
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <h3 className="ms-2">{e.organizer}</h3>
                  </Link>

                  <div className="d-flex justify-content-around">
                    <span className="">&#8205;</span>
                    <span className="">
                      <i className="fas fa-clock"></i> {e.dates}
                    </span>
                    <span className="">
                      <i className="fas fa-user-friends"></i> {e.participants}{" "}
                    </span>
                    <span className="">
                      <i className="fas fa-heart"></i> {e.likes}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
