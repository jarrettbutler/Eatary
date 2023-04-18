import { useState, useEffect } from "react";
import "./../../styles/main.scss";

import WeclomeMessage from "./WelcomeMessage";

const Ingredients = (props) => {
  const [att, setAtt] = useState("");
  const [recipeData, setRecipeData] = useState("");
  console.log(recipeData);
  console.log(att);
  console.log(props.attRes);

  useEffect(() => {
    setAtt(props.attRes);
    attRes();
  }, [props.attRes, att]);

  const attRes = async () => {
    if (att === "") {
    } else {
      const Result = await fetch(`/api/recipes/${att}`);
      const JsonResult = await Result.json();
      setRecipeData(JsonResult);
      console.log(recipeData);
      setAtt(props.attRes);
    }
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
              <use href=""></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">
              {!recipeData ? "" : recipeData.cookingTime}
            </span>
            <span className="recipe__info-text">minutes</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href=""></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">
              {!recipeData ? "" : recipeData.servings}
            </span>
            <span className="recipe__info-text">servings</span>

            <div className="recipe__info-buttons">
              <button className="btn--tiny btn--increase-servings">
                <svg>
                  <use href=""></use>
                </svg>
              </button>
              <button className="btn--tiny btn--increase-servings">
                <svg>
                  <use href=""></use>
                </svg>
              </button>
            </div>
          </div>

          <div className="recipe__user-generated">
            <svg>
              <use href=""></use>
            </svg>
          </div>
          <button className="btn--round">
            <svg className="">
              <use href=""></use>
            </svg>
          </button>
        </div>

        <div className="recipe__ingredients">
          <h2 className="heading--2">Recipe ingredients</h2>
          <ul className="recipe__ingredient-list">
            {!recipeData
              ? ""
              : recipeData.ingredients.map((ing) => (
                  <li className="recipe__ingredient">
                    <svg className="recipe__icon">
                      <use href=""></use>
                    </svg>
                    <div className="recipe__quantity">{ing.quantity}</div>
                    <div className="recipe__description">
                      <span className="recipe__unit">{ing.unit}</span>
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
              <use href=""></use>
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
