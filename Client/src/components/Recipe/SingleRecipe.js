import "./SingleRecipe.css";

function SingleRecipe() {
  return (
    <li className="preview">
      <a className="preview__link preview__link--active" href="#23456">
        <figure className="preview__fig">
          <img src="" alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">Pasta with Tomato Cream ...</h4>
          <p className="preview__publisher">The Pioneer Woman</p>
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
