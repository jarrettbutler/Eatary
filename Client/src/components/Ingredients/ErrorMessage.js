import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

function ErrorMessage() {
  return (
    <div className="recipe ">
      <div className="error ">
        <div>
          <svg>
            <use xlinkHref={`${Icons}#icon-alert-triangle`}></use>
          </svg>
        </div>
        <p>No recipes found for your query. Please try again!</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
