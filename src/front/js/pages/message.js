import React, { useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

/* import "../../styles/message.css"; */

export const Message = () => {
  const { actions, store } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    /* actions.getMatch(); */
  }, []);

  return (
    <Fragment>
      {
        store.match.map((e) => {
          return (
            <div key={e.id} className="modal-dialog" role="document">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-4 text-center">
                  <h5 className="mb-0">titulo</h5>
                  <p className="mb-0">{store.match.message}</p>
                </div>
                <div className="modal-footer flex-nowrap p-0">
                  <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"><strong>
                    accept request</strong></button>
                  <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">reject request</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </Fragment>
  );
};
