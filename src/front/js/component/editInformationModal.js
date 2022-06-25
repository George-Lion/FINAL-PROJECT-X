import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/editInformationModal.css";

export const EditInformationModal = ({ closeModal, editUser, user }) => {
    const { store, actions } = useContext(Context);

    return (
        <Fragment>
            <div
                className="modal fade show"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-modal="true"
                style={{
                    display: "block",
                    backdropFilter: "brightness(20%)",
                }}
            >
                <div className="modal-box1">
                    <div className="content-head">
                        <div className="section-title">
                            <h3>Edit Profile</h3>
                        </div>
                    </div>
                    <div className="content-body">

                        {/* USERNAME */}

                        <div className="section-user">
                            <div className="section-username">
                                <label htmlFor="username">Username:</label>
                                <input className="input-username" type="text" id="username" name="Username" onChange={(e) =>
                                    editUser({ ...user, username: e.target.value })
                                }></input>
                            </div>
                        </div>

                        {/* NAME */}

                        <div className="section-info">
                            <div className="section-first">
                                <label htmlFor="first">First Name:</label>
                                <input className="input-style" type="text" id="first" name="First" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        firstname:
                                            e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1).toLowerCase(),
                                    })
                                }></input>
                            </div>
                            <div className="section-last">
                                <label htmlFor="last">Last Name:</label>
                                <input className="input-style" type="text" id="last" name="Last" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        lastname:
                                            e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1).toLowerCase(),
                                    })
                                }></input>
                            </div>
                        </div>

                        {/* DIRECCTION */}

                        <div className="section-info">
                            <div className="section-first">
                                <label htmlFor="city">City:</label>
                                <input className="input-style" type="text" id="city" name="City" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        city_of_residence:
                                            e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1).toLowerCase(),
                                    })
                                }></input>
                            </div>
                            <div className="section-last">
                                <label htmlFor="country">Country:</label>
                                <input className="input-style" type="text" id="country" name="Country" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        country:
                                            e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1).toLowerCase(),
                                    })
                                }></input>
                            </div>
                        </div>

                        {/* TEXT */}

                        <div className="section-text">
                            <div className="text-area">
                                <label htmlFor="textDescription">About me:</label>
                                <textarea
                                    name="description"
                                    id="textDescription"
                                    className="form-control"
                                    defaultValue={store.user.description}
                                    aria-label="With textarea"
                                    maxLength={280}
                                    placeholder="Text"
                                    onChange={(e) =>
                                        editUser({
                                            ...user, description: e.target.value.charAt(0).toUpperCase() +
                                                e.target.value.slice(1).toLowerCase(),
                                        })
                                    }
                                ></textarea>
                            </div>
                            {<p>{user.description ? user.description.length : 0}/280</p>}
                        </div>
                    </div>

                    <div className="modal-footer">

                        {/* CLOSE BUTTON */}

                        <button
                            type="button"
                            className="btn-close bg-light"
                            aria-label="Close"
                            onClick={() => {
                                closeModal();
                            }}
                        ></button>

                        {/* SAVE BUTTON */}

                        <button
                            className="btn bg-light"
                            onClick={() => {
                                actions.editUser(user);
                            }}
                        >
                            <i className="far fa-save"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};