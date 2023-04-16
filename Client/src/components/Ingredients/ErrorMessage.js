import "./../../styles/main.scss";

function ErrorMessage() {
  return (
    <div className="error ">
      <div>
        <svg>
          <use href=""></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
}

export default ErrorMessage;
