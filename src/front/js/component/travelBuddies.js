import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/travelBuddies.css";

export const TravelBuddies = () => {
    const peopleCards = [
        {
            id: 1,
            name: "Yan Dupalok",
            image:
                "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            name: "Andre Rush",
            image:
                "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            name: "Carlos Blun",
            image:
                "https://images.pexels.com/photos/3379242/pexels-photo-3379242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 7,
            name: "Carlos Blun",
            image:
                "https://images.pexels.com/photos/2599510/pexels-photo-2599510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
    ];

    return (
        <Fragment>
            <div
                className="section-box  position-static d-block py-1 mt-3"

            >
                <h3 className="travel-title mt-2 text-center" style={{ color: "white" }}>
                    <b>Travel buddies</b>
                </h3>

                {/* CARDS */}

                <div>
                    <div className="row row-cols-1 align-items-stretch g-4 pt-1">
                        <div className="d-flex overflow-auto">
                            <div className="wrapper-travelers">
                                {peopleCards.map((e) => {
                                    return (
                                        <div
                                            key={e.id}
                                            className="pe-3"
                                            style={{ width: "240px" }}
                                        >
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="/user"
                                            >
                                                <div
                                                    className="travelers-img d-flex text-white align-items-end "
                                                    style={{
                                                        backgroundImage: "url(" + e.image + ")",
                                                    }}
                                                >
                                                    <div
                                                        className="d-flex flex-column text-white "
                                                        style={{
                                                            minHeight: "40px",
                                                            minWidth: "210px",
                                                            display: "block",
                                                        }}
                                                    >
                                                        <ul className="card-text-box list-unstyled ms-3">
                                                            <li className="mb-1">
                                                                <h2>{e.name}</h2>
                                                            </li>
                                                        </ul>
                                                        <div className="shadow-card-image"></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}