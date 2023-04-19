import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

function SingleRecipe(props) {
  const recipe = props.recipeRes;
  return (
    <li className="preview" id={recipe.id}>
      <div className="preview__link__div preview__link__div--active">
        <figure className="preview__fig">
          <img src={recipe.image} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{recipe.title} ...</h4>
          <p className="preview__publisher">{recipe.publisher}</p>
          {recipe.userGenerated ? (
            <div className="preview__user-generated">
              <svg>
                <use xlinkHref={`${Icons}#icon-user`}></use>
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}

export default SingleRecipe;
