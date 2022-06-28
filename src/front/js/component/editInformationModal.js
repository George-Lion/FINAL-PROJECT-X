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

                        {/* CLOSE BUTTON */}

                        <button
                            type="button"
                            className="btn-close bg-light"
                            aria-label="Close"
                            onClick={() => {
                                closeModal();
                            }}
                        ></button>
                    </div>
                    <div className="content-body">

                        {/* USERNAME */}

                        <div className="section-user">
                            <div className="section-username">
                                {/*  <label htmlFor="username">Username:</label> */}
                                <input className="input-username" type="text" maxLength={25} defaultValue={store.user.username} id="username" name="Username" placeholder="Username" onChange={(e) =>
                                    editUser({ ...user, username: e.target.value })
                                }></input>
                            </div>
                        </div>

                        {/* NAME */}

                        <div className="section-info">
                            <div className="section-first">
                                {/* <label htmlFor="first">First Name:</label> */}
                                <input className="input-style" type="text" maxLength={15} defaultValue={store.user.firstname} id="first" name="First" placeholder="FirstName" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        firstname:
                                            e.target.value

                                    })
                                }></input>
                            </div>
                            {user.firstname.length < 6 ? <h5>name containt 6 letters</h5> : null}
                            {user.firstname.length < 6 ? <h5>name containt 6 letters</h5> : null}
                            <div className="section-last">
                                {/* <label htmlFor="last">Last Name:</label> */}
                                <input className="input-style" type="text" maxLength={15} defaultValue={store.user.lastname} id="last" name="Last" placeholder="LastName" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        lastname:
                                            e.target.value
                                    })
                                }></input>
                            </div>
                        </div>

                        {/* DIRECCTION */}

                        <div className="section-info">
                            <div className="section-first">
                                {/* <label htmlFor="city">City:</label> */}
                                <input className="input-style" type="text" maxLength={18} defaultValue={store.user.city_of_residence} id="city" name="City" placeholder="City" onChange={(e) =>
                                    editUser({
                                        ...user,
                                        city_of_residence:
                                            e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1).toLowerCase(),
                                    })
                                }></input>
                            </div>
                            <div className="section-last">
                                {/* <label htmlFor="country">Country:</label> */}
                                <input className="input-style" type="text" maxLength={18} defaultValue={store.user.country} id="country" name="Country" placeholder="Country" onChange={(e) =>
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
                                {/* <label htmlFor="textDescription">About me:</label> */}
                                <textarea className="text-info text-white" defaultValue={store.user.description} rows="4" cols="50" placeholder="About me" maxLength={280} onChange={(e) =>
                                    editUser({
                                        ...user, description: e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1).toLowerCase(),
                                    })
                                }></textarea>
                            </div>
                            {<p className="counter-bio">{user.description ? user.description.length : 0}/280</p>}
                        </div>
                    </div>

                    <div className="modal-footer">

                        {/* SAVE BUTTON */}

                        <button
                            className="save-button"
                            onClick={() => {
                                if (user.firstname.length >= 6) {
                                    actions.editUser(user);
                                } else {

                                }

                            }}
                        >
                            <i className="far fa-save me-2"></i>save
                        </button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};