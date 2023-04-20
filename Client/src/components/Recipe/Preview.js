import SingleRecipe from "./SingleRecipe";
import "./../../styles/main.scss";
import { useEffect, useState } from "react";

function Preview(props) {
  const [target, setTarget] = useState("");

  useEffect(() => {}, [props.reRender]);

  const searched = async (e) => {
    const att = e.target.closest(".preview").getAttribute("id");
    setTarget(att);
    props.setAtt(att);
  };

  return (
    <div className="search-results">
      <ul className="results" onClick={searched}>
        {" "}
        {props.searchRes
          ? props.searchRes.map((recipe, i) => (
              <SingleRecipe recipeRes={recipe} key={i} />
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Preview;
