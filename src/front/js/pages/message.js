import React, { useEffect, useContext, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/message.css";

export const Message = () => {
  const { actions, store } = useContext(Context);
  const { id } = useParams();
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    if (store.match == "") {
      actions.getUserTrips();
    }

  }, []);


  return (
    <Fragment>
      <div className="footer-abajo">
        {store.match && store.match.length > 0 ? (
          store.match.sort((a, b) => a.id - b.id).map((e) => {
            return (
              <div key={e.id} className="footer-abajo modal-dialog" role="document">
                <div className={"modal-content rounded-4 shadow " + (e.accepted ? "bg-success" : e.rejected ? "bg-danger" : "bg-white")}>
                  <div className="modal-body p-4 text-center">
                    <h5 className="mb-0">titulo</h5>
                    <p className="mb-0">{e.message}</p>
                  </div>
                  <div className="modal-footer flex-nowrap p-0">
                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right" onClick={() =>
                      actions.acceptMatch(e)
                    }><strong>
                        accept request</strong></button>
                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">reject request</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="abajo">
            <h4 className="text-center text-dark mt-5">you have no messages</h4>
          </div>
        )}
      </div>
    </Fragment>
  );
};
