import "./SingleRecipe.css";

function SingleRecipe() {
  return (
    <li class="preview">
      <a class="preview__link preview__link--active" href="#23456">
        <figure class="preview__fig">
          <img src="src/img/favicon.png" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
          <p class="preview__publisher">The Pioneer Woman</p>
          <div class="preview__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

export default SingleRecipe;
