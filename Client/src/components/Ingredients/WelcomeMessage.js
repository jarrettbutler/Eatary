import "./../../styles/main.scss";
import Icons from "../../img/icons.svg";

function WeclomeMessage() {
  return (
    <div className="recipe ">
      <div className="message ">
        <div>
          <svg>
            <use xlinkHref={`${Icons}#icon-smile`}></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    </div>
  );
}

export default WeclomeMessage;
