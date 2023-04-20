import React, { Fragment, useState } from "react";
import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

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
          <h2 className="messageStyle">{props.messageContent}</h2>
          <button className="btn upload__btn" onClick={closeWindow}>
            <span>Ok</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Message;
