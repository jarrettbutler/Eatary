import SingleRecipe from "./SingleRecipe";
import "./Preview.css";

function Preview() {
  return (
    <div className="search-results">
      <ul className="results">
        <SingleRecipe />
      </ul>
    </div>
  );
}

export default Preview;
