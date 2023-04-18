import { useState } from 'react';
import "./../../styles/main.scss";
import AddRecipe from "../AddRecipe/AddRecipe";
import Icons from "../../img/icons.svg";


const Navigation = (props) => {

  const handleContactFormClick = () => {
    window.open('/contact', '_blank');
  };


  const [showAddRecipe, setAddRecipe]=useState(null)
  const logOutHandler = async function () {
    const response = await fetch("/api/users/logout", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("logged out!");
    } else {
      alert("Failed to log out");
    }
  };
  const AddRecipeHandler=()=>{
   setAddRecipe(1)
  }
  const HideAddRecipe=()=>{
    setAddRecipe(null)
  }
  return (
    <nav className="nav">
      <ul className="nav__list">

      <li className="nav__item">
          <button className="nav__btn nav__btn--contact" onClick={handleContactFormClick}>
            <svg className="nav__icon">
        </svg>
           <span>Contact</span> 
          </button>
          </li>

        <li className="nav__item">
          <button className="nav__btn nav__btn--add-recipe" onClick={AddRecipeHandler}>
            <svg className="nav__icon">
              <use xlinkHref={`${Icons}#icon-edit`}></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__btn nav__btn--bookmarks">
            <svg className="nav__icon">
              <use xlinkHref={`${Icons}#icon-bookmark`}></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <div className="bookmarks">
            <ul className="bookmarks__list">
              <div className="message">
                <div>
                  <svg>
                    <use xlinkHref={`${Icons}#icon-smile`}></use>
                  </svg>
                </div>
                <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
              </div>
            </ul>
          </div>
        </li>
        <li className="nav__item">
          <button
            onClick={logOutHandler}
            className="nav__btn nav__btn--add-recipe"
          >
            <svg className="nav__icon">
              <use href=""></use>
            </svg>
            <span>Logout</span>
          </button>
        </li>
      </ul>
      {showAddRecipe ?<AddRecipe hide={HideAddRecipe}/>:""}
    </nav>
  );
};
export default Navigation;
