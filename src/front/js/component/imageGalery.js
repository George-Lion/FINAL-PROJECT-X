import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/imageGalery.css";

export const ImageGalery = () => {
    const ImagePlace = [
        {
            id: 1,
            title: "Ontario",
            image:
                "https://images.pexels.com/photos/11449484/pexels-photo-11449484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "Amelia Treu",
            image:
                "https://images.pexels.com/photos/11020215/pexels-photo-11020215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Dana Silva",
            image:
                "https://images.pexels.com/photos/11020025/pexels-photo-11020025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            title: "Andre Rush",
            image:
                "https://images.pexels.com/photos/3010969/pexels-photo-3010969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            title: "Carlos Blun",
            image:
                "https://images.pexels.com/photos/6468928/pexels-photo-6468928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 7,
            title: "Carlos Blun",
            image:
                "https://images.pexels.com/photos/5833890/pexels-photo-5833890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <Fragment>
            <div
                className="position-static d-block py-3 mt-5"
                tabIndex="-1"
                role="dialog"
                id="modalChoice"
            >

                <div
                    className="galery-box  position-static d-block py-3"

                >
                    <h3 className="travel-title mt-2 text-center text-dark" style={{ color: "white" }}>
                        <b>GALERY</b>
                    </h3>

                    {/* CARDS */}

                    <div>
                        <div className="row row-cols-1 align-items-stretch g-4 pt-1">
                            <div className="d-flex overflow-auto">
                                <div className="galery-wrapper">
                                    {ImagePlace.map((e) => {
                                        return (
                                            <div
                                                key={e.id}
                                                className="pe-3"
                                                style={{ width: "410px" }}
                                            >
                                                <Link
                                                    style={{ textDecoration: "none" }}
                                                    to="/user"
                                                >
                                                    <div
                                                        className="galery-img d-flex text-white align-items-end "
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
                                                                    <h2></h2>
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
            </div>
        </Fragment>
    )
}