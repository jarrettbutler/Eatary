import { useState, useEffect } from "react";
import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

import WeclomeMessage from "./WelcomeMessage";

const Ingredients = (props) => {
  const [att, setAtt] = useState("");
  const [recipeData, setRecipeData] = useState("");

  const [addBookmark, setAddBookmark] = useState("");
  const [removeBookmark, setRemoveBookmark] = useState("hideBookmark");

  useEffect(() => {
    bookedRecData();
    setAtt(props.attRes);
    attRes();
  }, [props.attRes, att]);

  const bookedRecData = async () => {
    const res = await fetch("/api/userrecipes/book");
    const result = await res.json();

    if (result.includes(+att)) {
      setRemoveBookmark("");
      setAddBookmark("hideBookmark");
    } else {
      setRemoveBookmark("hideBookmark");
      setAddBookmark("");
    }
  };

  const attRes = async () => {
    if (att === "") {
    } else {
      const Result = await fetch(`/api/recipes/${att}`);
      const JsonResult = await Result.json();
      setRecipeData(JsonResult);

      setAtt(props.attRes);
    }
  };

  const addBMHandler = async () => {
    const response = await fetch("/api/userrecipes/", {
      method: "POST",
      body: JSON.stringify({
        recipeId: recipeData.id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setAddBookmark("hideBookmark");
      setRemoveBookmark("");
    } else {
      alert("Error please try again");
    }
  };

  const removeBMHandler = async () => {
    const response = await fetch("/api/userrecipes/", {
      method: "DELETE",
      body: JSON.stringify({
        recipeId: recipeData.id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setAddBookmark("");
      setRemoveBookmark("hideBookmark");
    } else {
      alert("Error please try again");
    }
  };

  const updatedServings = async function (newServings) {
    const ingredients = recipeData.ingredients;
    let newIngredients = [];

    ingredients.map((ing) => {
      newIngredients.push({
        unit: ing.unit,
        quantity: ((ing.quantity * newServings) / recipeData.servings).toFixed(
          1
        ),
        description: ing.description,
      });
    });

    setRecipeData({
      ...recipeData,
      servings: newServings,
      ingredients: newIngredients,
    });

    console.log(recipeData);
    console.log(newIngredients);
  };

  const increaseServings = async function (e) {
    e.preventDefault();
    const newServings = recipeData.servings + 1;

    updatedServings(newServings);
  };

  const decreaseServings = async function (e) {
    e.preventDefault();
    let newServings;

    if (recipeData.servings > 1) {
      newServings = recipeData.servings - 1;
    } else {
      newServings = 1;
    }

    updatedServings(newServings);
  };

  if (recipeData) {
    return (
      <div className="recipe ">
        <figure className="recipe__fig">
          <img
            src={!recipeData ? "" : recipeData.image}
            alt="Tomato"
            className="recipe__img"
          />
          <h1 className="recipe__title">
            <span>{!recipeData ? "" : recipeData.title}</span>
          </h1>
        </figure>

        <div className="recipe__details">
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use xlinkHref={`${Icons}#icon-clock`}></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">
              {!recipeData ? "" : recipeData.cookingTime}
            </span>
            <span className="recipe__info-text">minutes</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use xlinkHref={`${Icons}#icon-user`}></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">
              {!recipeData ? "" : recipeData.servings}
            </span>
            <span className="recipe__info-text">servings</span>

            <div className="recipe__info-buttons">
              <button
                className="btn--tiny btn--increase-servings"
                onClick={decreaseServings}
              >
                <svg>
                  <use xlinkHref={`${Icons}#icon-minus-circle`}></use>
                </svg>
              </button>
              <button
                className="btn--tiny btn--increase-servings"
                onClick={increaseServings}
              >
                <svg>
                  <use xlinkHref={`${Icons}#icon-plus-circle`}></use>
                </svg>
              </button>
            </div>
          </div>

          {!recipeData.userGenerated ? (
            <div className="non"></div>
          ) : (
            <div className="recipe__user-generated">
              <svg>
                <use xlinkHref={`${Icons}#icon-user`}></use>
              </svg>
            </div>
          )}

          <button
            className={`${"btn--round"} ${addBookmark}`}
            onClick={addBMHandler}
          >
            <svg className="">
              <use xlinkHref={`${Icons}#icon-bookmark`}></use>:
            </svg>
          </button>
          <button
            className={`${"btn--round"} ${removeBookmark}`}
            onClick={removeBMHandler}
          >
            <svg className="">
              <use xlinkHref={`${Icons}#icon-bookmark-fill`}></use>
            </svg>
          </button>
        </div>

        <div className="recipe__ingredients">
          <h2 className="heading--2">Recipe ingredients</h2>
          <ul className="recipe__ingredient-list">
            {!recipeData
              ? ""
              : recipeData.ingredients.map((ing, i) => (
                  <li className="recipe__ingredient" key={i}>
                    <svg className="recipe__icon">
                      <use xlinkHref={`${Icons}#icon-check`}></use>
                    </svg>
                    <div className="recipe__quantity">{ing.quantity}</div>
                    <div className="recipe__description">
                      <span className="recipe__unit">{ing.unit}</span>&nbsp;
                      {ing.description}
                    </div>
                  </li>
                ))}
          </ul>
        </div>

        <div className="recipe__directions">
          <h2 className="heading--2">How to cook it</h2>
          <p className="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span className="recipe__publisher">
              {!recipeData ? "" : recipeData.publisher}
            </span>
            . Please check out directions at their website.
          </p>
          <a
            className="btn--small recipe__btn"
            href={!recipeData ? "" : recipeData.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Directions</span>
            <svg className="search__icon">
              <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
            </svg>
          </a>
        </div>
      </div>
    );
  } else {
    return <WeclomeMessage />;
  }
};

export default Ingredients;
