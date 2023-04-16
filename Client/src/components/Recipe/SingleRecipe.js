import "./../../styles/main.scss";

function SingleRecipe(props) {
  const recipe = props.recipeRes
  console.log(recipe);
  return (
    <li className="preview">
      <a className="preview__link preview__link--active" href="#23456">
        <figure className="preview__fig">
          <img src={recipe.image} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{recipe.title} ...</h4>
          <p className="preview__publisher">{recipe.publisher}</p>
          <div className="preview__user-generated">
            <svg>
              <use href=""></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

export default SingleRecipe;
