import SingleRecipe from "./SingleRecipe";
import "./../../styles/main.scss";
import { useState } from "react";

function Preview(props) {
  console.log(props);

  const [target, setTarget] = useState("");
  const [singleRec, setSingleRec] = useState("");

  // const searched = async (e) => {
  //   const att = e.target.closest(".results").getAttribute("data-id");
  //   setTarget(att);
  //   const Result = await fetch(`/api/recipes/${att}`);
  //   const JsonResult = await Result.json();
  //   setSingleRec(JsonResult);
  //   console.log(JsonResult);
  // };

  return (
    <div className="search-results">
      <ul className="results" >{props.searchRes.map((recipe, i)=> <SingleRecipe recipeRes={recipe} key={i}/>)}
      </ul>
    </div>
  );
}

export default Preview;
