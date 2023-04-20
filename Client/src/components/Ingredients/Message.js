import React, { Fragment } from "react";
import "./../../styles/main.scss";

const Message = (props) => {
  const closeWindow = () => {
    props.hideM();
  };

  return (
    <Fragment>
      <div className="overlay "></div>
      <div className="add-recipe-window ">
        <button onClick={closeWindow} className="btn--close-modal">
          &times;
        </button>
        <div className="Message">
          <h2>{props.messageContent}</h2>
          <button className="btn upload__btn" onClick={closeWindow}>
            <span>Ok</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Message;
