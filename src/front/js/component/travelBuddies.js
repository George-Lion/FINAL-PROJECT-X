import React, { Fragment, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/travelBuddies.css";

export const TravelBuddies = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        if (store.match == "") {
            actions.getUserTrips();
        }

    }, []);

    return (
        <Fragment>
            <div
                className="section-box position-static d-block py-1 mt-3"

            >
                <h3 className="travel-title mt-3 text-center" style={{ color: "white" }}>
                    <b>Travel buddies</b>
                </h3>

                {/* CARDS */}

                <div>
                    <div className="">
                        <div className="">
                            <div className="wrapper-travelers">
                                {store.match.map((e) => {
                                    return (
                                        <div
                                            key={e.id}
                                            className=""

                                        >
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="/user"
                                            >
                                                <div
                                                    className="travelers-img d-flex text-white align-items-end "
                                                    style={{
                                                        backgroundImage: "url(" + e.profile_picture + ")",
                                                    }}
                                                >
                                                    <div
                                                        className=" "

                                                    >
                                                        <ul className="card-text-box list-unstyled ms-3">
                                                            <li className="mb-1">
                                                                <h2>{e.username}</h2>
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