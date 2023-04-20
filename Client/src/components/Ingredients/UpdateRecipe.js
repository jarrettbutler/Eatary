import React, { Fragment, useState } from "react";
import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

const UpdateRecipe = (props) => {
  const [recipeData, setRecipeData] = useState(props.recipeData);
  const [title, setEntEredTitle] = useState(recipeData.title);
  const [sourceUrl, setEnteredUrl] = useState(recipeData.sourceUrl);
  const [image, setEnteredImUrl] = useState(recipeData.image);
  const [publisher, setEnteredPublisher] = useState(recipeData.publisher);
  const [cookingTime, setEnteredPrepTime] = useState(recipeData.cookingTime);
  const [servings, setEnteredServings] = useState(recipeData.servings);
  const [enteredIng1, setEnteredIng1] = useState({
    quantity: recipeData.ingredients[0].quantity,
    unit: recipeData.ingredients[0].unit,
    description: recipeData.ingredients[0].description,
  });

  const [enteredIng2, setEnteredIng2] = useState({
    quantity: recipeData.ingredients[1].quantity,
    unit: recipeData.ingredients[1].unit,
    description: recipeData.ingredients[1].description,
  });
  // const [enteredIng2, setEnteredIng2] = useState("");
  const [enteredIng3, setEnteredIng3] = useState({
    quantity: recipeData.ingredients[2].quantity,
    unit: recipeData.ingredients[2].unit,
    description: recipeData.ingredients[2].description,
  });
  const [enteredIng4, setEnteredIng4] = useState({
    quantity: recipeData.ingredients[3].quantity,
    unit: recipeData.ingredients[3].unit,
    description: recipeData.ingredients[3].description,
  });
  const [enteredIng5, setEnteredIng5] = useState({
    quantity: recipeData.ingredients[4].quantity,
    unit: recipeData.ingredients[4].unit,
    description: recipeData.ingredients[4].description,
  });
  const [enteredIng6, setEnteredIng6] = useState({
    quantity: recipeData.ingredients[5].quantity,
    unit: recipeData.ingredients[5].unit,
    description: recipeData.ingredients[5].description,
  });

  const [Msg, setMsg] = useState("");

  const TitleHandler = (event) => {
    setEntEredTitle(event.target.value);
  };
  const UrlHandler = (event) => {
    setEnteredUrl(event.target.value);
  };
  const ImgUrlHandler = (event) => {
    setEnteredImUrl(event.target.value);
  };
  const PublisherlHandler = (event) => {
    setEnteredPublisher(event.target.value);
  };
  const PrepTimelHandler = (event) => {
    setEnteredPrepTime(event.target.value);
  };
  const ServingsHandler = (event) => {
    setEnteredServings(event.target.value);
  };

  const Ingredient1QuantityHandler = (event) => {
    setEnteredIng1({
      ...enteredIng1,
      quantity:
        props.recipeData.ingredients[0].quantity !== "" &&
        props.recipeData.ingredients[0].quantity !== null
          ? props.recipeData.ingredients[0].quantity
          : event.target.value,
    });
  };

  const Ingredient1UnitHandler = (event) => {
    setEnteredIng1({
      ...enteredIng1,
      unit:
        recipeData.ingredients[0].unit !== "" &&
        recipeData.ingredients[0].unit !== null
          ? recipeData.ingredients[0].unit
          : event.target.value,
    });
  };
  const Ingredient1DescHandler = (event) => {
    setEnteredIng1({ ...enteredIng1, description: event.target.value });
  };
  ///
  const Ingredient2QuantityHandler = (event) => {
    setEnteredIng2({
      ...enteredIng2,
      quantity: event.target.value,
    });
  };
  const Ingredient2UnitHandler = (event) => {
    setEnteredIng2({ ...enteredIng2, unit: event.target.value });
  };
  const Ingredient2DescHandler = (event) => {
    setEnteredIng2({ ...enteredIng2, description: event.target.value });
  };
  /////
  const Ingredient3QuantityHandler = (event) => {
    setEnteredIng3({
      ...enteredIng3,
      quantity: event.target.value,
    });
  };
  const Ingredient3UnitHandler = (event) => {
    setEnteredIng3({ ...enteredIng3, unit: event.target.value });
  };
  const Ingredient3DescHandler = (event) => {
    setEnteredIng3({ ...enteredIng3, description: event.target.value });
  };
  ///
  const Ingredient4QuantityHandler = (event) => {
    setEnteredIng4({
      ...enteredIng4,
      quantity: event.target.value,
    });
  };
  const Ingredient4UnitHandler = (event) => {
    setEnteredIng4({ ...enteredIng4, unit: event.target.value });
  };
  const Ingredient4DescHandler = (event) => {
    setEnteredIng4({ ...enteredIng4, description: event.target.value });
  };
  //5
  const Ingredient5QuantityHandler = (event) => {
    setEnteredIng5({
      ...enteredIng5,
      quantity:
        !recipeData.ingredients[4].quantity === ""
          ? recipeData.ingredients[4].quantity
          : event.target.value,
    });
  };
  const Ingredient5UnitHandler = (event) => {
    setEnteredIng5({ ...enteredIng5, unit: event.target.value });
  };
  const Ingredient5DescHandler = (event) => {
    setEnteredIng5({ ...enteredIng5, description: event.target.value });
  };
  ///6
  const Ingredient6QuantityHandler = (event) => {
    setEnteredIng6({
      ...enteredIng6,
      quantity:
        !recipeData.ingredients[5].quantity === ""
          ? recipeData.ingredients[5].quantity
          : event.target.value,
    });
  };
  const Ingredient6UnitHandler = (event) => {
    setEnteredIng6({ ...enteredIng6, unit: event.target.value });
  };
  const Ingredient6DescHandler = (event) => {
    setEnteredIng6({ ...enteredIng6, description: event.target.value });
  };

  const UploadHandler = async (event) => {
    event.preventDefault();

    const userGenerated = true;
    const ingredients = [];
    ingredients.push(
      enteredIng1,
      enteredIng2,
      enteredIng3,
      enteredIng4,
      enteredIng5,
      enteredIng6
    );
    if (
      title === "" ||
      publisher === "" ||
      servings === "" ||
      image === "" ||
      cookingTime === "" ||
      sourceUrl === ""
    ) {
      setMsg("All fields in Recipe Data section has to be filled");
    } else {
      const response = await fetch("/api/recipes", {
        method: "PUT",
        body: JSON.stringify({
          id: recipeData.id,
          userGenerated,
          title,
          publisher,
          sourceUrl,
          image,
          servings,
          cookingTime,
          ingredients,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        console.log({
          id: recipeData.id,
          userGenerated,
          title,
          publisher,
          sourceUrl,
          image,
          servings,
          cookingTime,
          ingredients,
        });
        console.log(response);
      } else {
        props.setShowUpdateRecipe(false);
        setEntEredTitle("");
        setEnteredUrl("");
        setEnteredImUrl("");
        setEnteredPublisher("");
        setEnteredPrepTime("");
        setEnteredServings("");
        setEnteredIng1("");
        setEnteredIng2("");
        setEnteredIng3("");
        setEnteredIng4("");
        setEnteredIng5("");
        setEnteredIng6("");
        closeWindow();
        props.setReRender(title);
      }
    }
  };
  const closeWindow = () => {
    props.setShowUpdateRecipe(false);
  };
  const deleteUserRecipe = async () => {
    const response = await fetch("/api/recipes/", {
      method: "DELETE",
      body: JSON.stringify({
        id: recipeData.id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      props.setShowUpdateRecipe(false);
      props.setReRender(title);
    } else {
      alert("Error please try again");
    }
  };

  return (
    <Fragment>
      <div className="overlay "></div>
      <div className="add-recipe-window ">
        <button onClick={closeWindow} className="btn--close-modal">
          &times;
        </button>
        <form className="upload">
          <div className="upload__column">
            <h3 className="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input
              className="upload__input"
              type="text"
              onChange={TitleHandler}
              value={title}
              required
              name="title"
            />
            <label>URL</label>
            <input
              className="upload__input"
              onChange={UrlHandler}
              value={sourceUrl}
              required
              name="sourceUrl"
              type="text"
            />
            <label>Image URL</label>
            <input
              className="upload__input"
              onChange={ImgUrlHandler}
              value={image}
              required
              name="image"
              type="text"
            />
            <label>Publisher</label>
            <input
              className="upload__input"
              onChange={PublisherlHandler}
              value={publisher}
              required
              name="publisher"
              type="text"
            />
            <label>Prep time</label>
            <input
              className="upload__input"
              onChange={PrepTimelHandler}
              value={cookingTime}
              required
              name="cookingTime"
              type="number"
            />
            <label>Servings</label>
            <input
              className="upload__input"
              onChange={ServingsHandler}
              value={servings}
              required
              name="servings"
              type="number"
            />
          </div>
          <div className="upload__column">
            <h3 className="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <div className="IngrComp">
              <input
                onChange={Ingredient1QuantityHandler}
                value={enteredIng1.quantity}
                type="text"
                required
                name="ingredient-1"
                placeholder="Quantity"
              />
              <input
                onChange={Ingredient1UnitHandler}
                value={enteredIng1.unit}
                type="text"
                required
                name="ingredient-1"
                placeholder="Unit"
              />
              <input
                onChange={Ingredient1DescHandler}
                value={enteredIng1.description}
                type="text"
                required
                name="ingredient-1"
                placeholder="Description"
              />
            </div>
            <label>Ingredient 2</label>
            <div className="IngrComp">
              <input
                onChange={Ingredient2QuantityHandler}
                value={enteredIng2.quantity}
                type="text"
                required
                name="ingredient-1"
                placeholder="Quantity"
              />
              <input
                onChange={Ingredient2UnitHandler}
                value={enteredIng2.unit}
                type="text"
                required
                name="ingredient-1"
                placeholder="Unit"
              />
              <input
                onChange={Ingredient2DescHandler}
                value={enteredIng2.description}
                type="text"
                required
                name="ingredient-1"
                placeholder="Description"
              />
            </div>
            <label>Ingredient 3</label>
            <div className="IngrComp">
              <input
                onChange={Ingredient3QuantityHandler}
                value={enteredIng3.quantity}
                type="text"
                required
                name="ingredient-1"
                placeholder="Quantity"
              />
              <input
                onChange={Ingredient3UnitHandler}
                value={enteredIng3.unit}
                type="text"
                required
                name="ingredient-1"
                placeholder="Unit"
              />
              <input
                onChange={Ingredient3DescHandler}
                value={enteredIng3.description}
                type="text"
                required
                name="ingredient-1"
                placeholder="Description"
              />
            </div>
            <label>Ingredient 4</label>
            <div className="IngrComp">
              <input
                onChange={Ingredient4QuantityHandler}
                value={enteredIng4.quantity}
                type="text"
                required
                name="ingredient-1"
                placeholder="Quantity"
              />
              <input
                onChange={Ingredient4UnitHandler}
                value={enteredIng4.unit}
                type="text"
                required
                name="ingredient-1"
                placeholder="Unit"
              />
              <input
                onChange={Ingredient4DescHandler}
                value={enteredIng4.description}
                type="text"
                required
                name="ingredient-1"
                placeholder="Description"
              />
            </div>
            <label>Ingredient 5</label>
            <div className="IngrComp">
              <input
                onChange={Ingredient5QuantityHandler}
                value={enteredIng5.quantity}
                type="text"
                required
                name="ingredient-1"
                placeholder="Quantity"
              />
              <input
                onChange={Ingredient5UnitHandler}
                value={enteredIng6.unit}
                type="text"
                required
                name="ingredient-1"
                placeholder="Unit"
              />
              <input
                onChange={Ingredient5DescHandler}
                value={enteredIng5.description}
                type="text"
                required
                name="ingredient-1"
                placeholder="Description"
              />
            </div>
            <label>Ingredient 6</label>
            <div className="IngrComp">
              <input
                onChange={Ingredient6QuantityHandler}
                value={enteredIng6.quantity}
                type="text"
                required
                name="ingredient-1"
                placeholder="Quantity"
              />
              <input
                onChange={Ingredient6UnitHandler}
                value={enteredIng6.unit}
                type="text"
                required
                name="ingredient-1"
                placeholder="Unit"
              />
              <input
                onChange={Ingredient6DescHandler}
                value={enteredIng6.description}
                type="text"
                required
                name="ingredient-1"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="upload__column_btn">
            <button className="btn upload__btn" onClick={UploadHandler}>
              <svg>
                <use xlinkHref={`${Icons}#icon-save`}></use>
              </svg>
              <span>SAVE</span>
            </button>
          </div>
          <div className="upload__column_btn">
            <button className="btn upload__btn2" onClick={deleteUserRecipe}>
              <svg className="">
                <use xlinkHref={`${Icons}#icon--delete`}></use>:
              </svg>
              <span>DELETE</span>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default UpdateRecipe;
