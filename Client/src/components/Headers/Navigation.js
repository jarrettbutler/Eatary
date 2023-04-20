import { useState, useEffect, useReducer } from "react";
import "./../../styles/main.scss";
import AddRecipe from "../AddRecipe/AddRecipe";
import Icons from "../../img/icons.svg";
import SingleRecipe from "../Recipe/SingleRecipe";
import BookMark from "./BookMark";
import Message from "../AddRecipe/Message";
import LogoutMessage from "./LogoutMessage";
const Navigation = (props) => {
  const handleContactFormClick = () => {
    window.open("/contact", "_blank");
  };
  const [LogoutM, setLogout] = useState(null);
  const [showAddRecipe, setAddRecipe] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [active, setActive] = useState(false);
  const [MessageContent, setMessageContent] = useState("");
  // function bookSearchedRecipe(e) {
  //   const att = e.target.closest(".preview").getAttribute("id");
  //   props.setAtt(att);
  //   console.log(att);
  // }

  const hover = () => {
    setActive(true);
  };

  const unhover = () => {
    setActive(false);
  };

  const logOutHandler = async function () {
    const response = await fetch("/api/users/logout", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setLogout(1);
      setMessageContent("You successfully logged out");
      // document.location.replace("/");
      //alert("You successfully logged out")
    } else {
      setShowMessage(1);
      setMessageContent('"Failed to log out');
      alert("Failed to log out");
    }
  };
  const AddRecipeHandler = () => {
    setAddRecipe(1);
  };
  const HideAddRecipe = () => {
    setAddRecipe(null);
  };
  const MessageShown = () => {
    setShowMessage(1);
    setMessageContent("Your recipe has been successfully added");
  };
  const HideMessage = () => {
    setShowMessage(null);
  };
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button
            className="nav__btn nav__btn--contact"
            onClick={handleContactFormClick}
          >
            <svg className="nav__icon">
              <use xlinkHref={`${Icons}#icon-contact`}></use>
            </svg>
            <span>Contact</span>
          </button>
        </li>

        <li className="nav__item">
          <button
            className="nav__btn nav__btn--add-recipe"
            onClick={AddRecipeHandler}
          >
            <svg className="nav__icon">
              <use xlinkHref={`${Icons}#icon-edit`}></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__btn nav__btn--bookmarks"
            onMouseEnter={hover}
            onMouseLeave={unhover}
          >
            <svg className="nav__icon">
              <use xlinkHref={`${Icons}#icon-bookmark`}></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <BookMark
            setAtt={props.setAtt}
            active={active}
            onMouseEnter={hover}
            onMouseLeave={unhover}
          />
        </li>
        <li className="nav__item">
          <button
            onClick={logOutHandler}
            className="nav__btn nav__btn--add-recipe"
          >
            <svg className="nav__icon">
              <use xlinkHref={`${Icons}#icon-logout`}></use>
            </svg>
            <span>Logout</span>
          </button>
        </li>
      </ul>
      {showAddRecipe ? (
        <AddRecipe
          hide={HideAddRecipe}
          messageshown={MessageShown}
          setReRender={props.setReRender}
        />
      ) : (
        ""
      )}
      {showMessage ? (
        <Message hideM={HideMessage} messageContent={MessageContent} />
      ) : (
        ""
      )}
      //
      {LogoutM ? (
        <LogoutMessage hideM={HideMessage} messageContent={MessageContent} />
      ) : (
        ""
      )}
    </nav>
  );
};
export default Navigation;
