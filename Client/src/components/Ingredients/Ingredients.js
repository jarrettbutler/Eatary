import { Fragment } from "react";
import "./Ingredients.css";

const Ingredients = (props) => {
    return (
        <Fragment>
            <div class="recipe">
                <div class="message">
                    <div>
                        <svg>
                            <use href="src/img/icons.svg#icon-smile"></use>
                        </svg>
                    </div>
                    <p>Start by searching for a recipe or an ingredient. Have fun!</p>
                </div>
            </div>

                <div class="overlay hidden"></div>
                <div class="add-recipe-window hidden">
                    <button class="btn--close-modal">&times;</button>
                    <form class="upload">
                        <div class="upload__column">
                            <h3 class="upload__heading">Recipe data</h3>
                            <label>Title</label>
                            <input value="TEST23" required name="title" type="text" />
                            <label>URL</label>
                            <input value="TEST23" required name="sourceUrl" type="text" />
                            <label>Image URL</label>
                            <input value="TEST23" required name="image" type="text" />
                            <label>Publisher</label>
                            <input value="TEST23" required name="publisher" type="text" />
                            <label>Prep time</label>
                            <input value="23" required name="cookingTime" type="number" />
                            <label>Servings</label>
                            <input value="23" required name="servings" type="number" />
                        </div>

                        <div class="upload__column">
                            <h3 class="upload__heading">Ingredients</h3>
                            <label>Ingredient 1</label>
                            <input
                                value="0.5,kg,Rice"
                                type="text"
                                required
                                name="ingredient-1"
                                placeholder="Format: 'Quantity,Unit,Description'"
                            />
                            <label>Ingredient 2</label>
                            <input
                                value="1,,Avocado"
                                type="text"
                                name="ingredient-2"
                                placeholder="Format: 'Quantity,Unit,Description'"
                            />
                            <label>Ingredient 3</label>
                            <input
                                value=",,salt"
                                type="text"
                                name="ingredient-3"
                                placeholder="Format: 'Quantity,Unit,Description'"
                            />
                            <label>Ingredient 4</label>
                            <input
                                type="text"
                                name="ingredient-4"
                                placeholder="Format: 'Quantity,Unit,Description'"
                            />
                            <label>Ingredient 5</label>
                            <input
                                type="text"
                                name="ingredient-5"
                                placeholder="Format: 'Quantity,Unit,Description'"
                            />
                            <label>Ingredient 6</label>
                            <input
                                type="text"
                                name="ingredient-6"
                                placeholder="Format: 'Quantity,Unit,Description'"
                            />
                        </div>

                        <button class="btn upload__btn">
                            <svg>
                                <use href="src/img/icons.svg#icon-upload-cloud"></use>
                            </svg>
                            <span>Upload</span>
                        </button>
                    </form>
                </div>
        </Fragment>
    )
}
export default Ingredients;