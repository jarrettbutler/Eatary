import { useState, useEffect, useLayoutEffect } from "react";
import "./../../styles/main.scss";
import SingleRecipe from "../Recipe/SingleRecipe";
import Icons from "../../img/icons.svg";

function BookMark(props) {
  const [bookData, setBookData] = useState("");

  useEffect(() => {
    getBookmarkedRecipes();
  }, [props.active]);

  useLayoutEffect(() => {}, [bookData]);

  async function getBookmarkedRecipes() {
    const response = await fetch("/api/users/");
    const jsonData = await response.json();
    setBookData(jsonData);
  }

  function bookSearchedRecipe(e) {
    const att = e.target.closest(".preview").getAttribute("id");
    props.setAtt(att);
  }

  return (
    <div
      className={props.active ? "bookmarks hovered" : "bookmarks"}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <ul className="bookmarks__list" onClick={bookSearchedRecipe}>
        {bookData.length > 0 ? (
          bookData.map((recipe, i) => (
            <SingleRecipe recipeRes={recipe} key={i} />
          ))
        ) : (
          <div className="message">
            <div>
              <svg>
                <use xlinkHref={`${Icons}#icon-smile`}></use>
              </svg>
            </div>
            <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default BookMark;
