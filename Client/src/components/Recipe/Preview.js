import SingleRecipe from "./SingleRecipe";
import "./Preview.css";

function Preview() {
  return (
    <div class="search-results">
      <ul class="results">
        <SingleRecipe />
      </ul>
    </div>
  );
}

export default Preview;
