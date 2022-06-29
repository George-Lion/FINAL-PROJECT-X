import React, { useEffect, useContext, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/message.css";

export const Message = () => {
  const { actions, store } = useContext(Context);
  const { id } = useParams();
  const [accept, setAccept] = useState(false);

  let matchCount = 0;
  matchCount = store.match.length;

  useEffect(() => {
    actions.readMessages()
  }, [])

  return (
    <Fragment>
      <div className="footer-abajo">
        <div className="message-box position-static d-block py-1 mt-5 mb-4">
          {store.match && store.match.length > 0 ? (
            <h3
              className="sms-title mt-3 mb-3 text-center text-white"
            >
              <b>{matchCount} Messages</b>
            </h3>
          ) : null}
          <div className="d-flex overflow-auto ">
            <div className="wrapper-message">
              <div className="container">
                {store.match && store.match.length > 0 ? (
                  store.match.sort((a, b) => a.id - b.id).map((e) => {
                    return (
                      <div key={e.id} className="mb-4" role="document">
                        <div className="modal-content rounded-4 shadow" style={(e.accepted ? { background: '#B1EBFF' } : e.rejected ? { background: '#FF7A69' } : { background: 'white' })}>
                          <i className="fas fa-times-circle text-danger d-flex justify-content-end mt-2 me-2" style={{ fontSize: "23px" }}></i>
                          <div className="text-center">
                            <Link
                              to={"/noEditProfile/" + e.user_id
                              } className="text-decoration-none text-dark">
                              <img className="message-avatar" src={e.profile_picture} alt="img" />
                              <h5 className="u-name mb-0">{e.username} </h5></Link>
                            <h5 className="u-request mb-0"> Travel: {e.destination}</h5>
                            <p className="text-message rounded bg-white text-break text-dark">{e.message}</p>
                          </div>
                          <div className="modal-footer flex-nowrap p-0">
                            <button type="button" className="btn btn-lg  fs-6 text-decoration-none col-6 m-0 rounded-0 border-right" onClick={() =>
                              actions.acceptMatch(e)
                            }><strong className="">
                                accept request</strong></button>
                            <button type="button" className="btn btn-lg  fs-6 text-decoration-none col-6 m-0 rounded-0 " data-bs-dismiss="modal" onClick={() => {
                              actions.rejectMatch(e)
                            }}><strong className="">reject request</strong></button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="abajo">
                    <h4 className="sms-title text-center text-white mt-5">You have no messages</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
