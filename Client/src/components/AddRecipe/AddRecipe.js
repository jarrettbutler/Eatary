import React, { Fragment, useState } from "react";
import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

const AddRecipe = (props) => {
  const [title, setEntEredTitle] = useState("");
  const [sourceUrl, setEnteredUrl] = useState("");
  const [image, setEnteredImUrl] = useState("");
  const [publisher, setEnteredPublisher] = useState("");
  const [cookingTime, setEnteredPrepTime] = useState("");
  const [servings, setEnteredServings] = useState("");
  const [enteredIng1, setEnteredIng1] = useState({
    quantity: "",
    unit: "",
    description: "",
  });
  // const[enteredIng1, setEnteredIng1]=useState('')

  const [enteredIng2, setEnteredIng2] = useState({
    quantity: "",
    unit: "",
    description: "",
  });
  // const [enteredIng2, setEnteredIng2] = useState("");
  const [enteredIng3, setEnteredIng3] = useState({
    quantity: "",
    unit: "",
    description: "",
  });
  const [enteredIng4, setEnteredIng4] = useState({
    quantity: "",
    unit: "",
    description: "",
  });
  const [enteredIng5, setEnteredIng5] = useState({
    quantity: "",
    unit: "",
    description: "",
  });
  const [enteredIng6, setEnteredIng6] = useState({
    quantity: "",
    unit: "",
    description: "",
  });

  // const [enteredIng3, setEnteredIng3] = useState("");
  // const [enteredIng4, setEnteredIng4] = useState("");
  // const [enteredIng5, setEnteredIng5] = useState("");
  // const [enteredIng6, setEnteredIng6] = useState("");
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
    setEnteredIng1({ ...enteredIng1, quantity: event.target.value });
  };

  const Ingredient1UnitHandler = (event) => {
    setEnteredIng1({ ...enteredIng1, unit: event.target.value });
  };
  const Ingredient1DescHandler = (event) => {
    setEnteredIng1({ ...enteredIng1, description: event.target.value });
  };
  ///
  const Ingredient2QuantityHandler = (event) => {
    setEnteredIng2({ ...enteredIng2, quantity: event.target.value });
  };
  const Ingredient2UnitHandler = (event) => {
    setEnteredIng2({ ...enteredIng2, unit: event.target.value });
  };
  const Ingredient2DescHandler = (event) => {
    setEnteredIng2({ ...enteredIng2, description: event.target.value });
  };
  /////
  const Ingredient3QuantityHandler = (event) => {
    setEnteredIng3({ ...enteredIng3, quantity: event.target.value });
  };
  const Ingredient3UnitHandler = (event) => {
    setEnteredIng3({ ...enteredIng3, unit: event.target.value });
  };
  const Ingredient3DescHandler = (event) => {
    setEnteredIng3({ ...enteredIng3, description: event.target.value });
  };
  ///
  const Ingredient4QuantityHandler = (event) => {
    setEnteredIng4({ ...enteredIng4, quantity: event.target.value });
  };
  const Ingredient4UnitHandler = (event) => {
    setEnteredIng4({ ...enteredIng4, unit: event.target.value });
  };
  const Ingredient4DescHandler = (event) => {
    setEnteredIng4({ ...enteredIng4, description: event.target.value });
  };
  //5
  const Ingredient5QuantityHandler = (event) => {
    setEnteredIng5({ ...enteredIng5, quantity: event.target.value });
  };
  const Ingredient5UnitHandler = (event) => {
    setEnteredIng5({ ...enteredIng5, unit: event.target.value });
  };
  const Ingredient5DescHandler = (event) => {
    setEnteredIng5({ ...enteredIng5, description: event.target.value });
  };
  ///6
  const Ingredient6QuantityHandler = (event) => {
    setEnteredIng6({ ...enteredIng6, quantity: event.target.value });
  };
  const Ingredient6UnitHandler = (event) => {
    setEnteredIng6({ ...enteredIng6, unit: event.target.value });
  };
  const Ingredient6DescHandler = (event) => {
    setEnteredIng6({ ...enteredIng6, description: event.target.value });
  };

  // const Ingredient2Handler = (event) => {
  //   setEnteredIng2(event.target.value);
  // };
  // const Ingredient3Handler = (event) => {
  //   setEnteredIng3(event.target.value);
  // };
  // const Ingredient4Handler = (event) => {
  //   setEnteredIng4(event.target.value);
  // };
  // const Ingredient5Handler = (event) => {
  //   setEnteredIng5(event.target.value);
  // };
  // const Ingredient6Handler = (event) => {
  //   setEnteredIng6(event.target.value);
  // };
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
      sourceUrl === "" ||
      enteredIng1.description === ""
    ) {
      setMsg(
        "All fields in Recipe Data  section and at least first ingredient description has to be filled"
      );
    } else {
      const response = await fetch("/api/recipes", {
        method: "POST",
        body: JSON.stringify({
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
        alert("something wrong!");
      } else {
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
        props.hide();
        props.messageshown();
        props.setReRender({
          title,
        });
      }
    }
  };
  const closeWindow = () => {
    props.hide();
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
                value={enteredIng5.unit}
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
          <h2>{Msg}</h2>
          <button className="btn upload__btn3" onClick={UploadHandler}>
            <svg>
              <use xlinkHref={`${Icons}#icon-upload-cloud`}></use>
            </svg>
            <span>Upload</span>
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default AddRecipe;
