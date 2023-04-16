import SingleRecipe from "./SingleRecipe";
import "./../../styles/main.scss";

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
