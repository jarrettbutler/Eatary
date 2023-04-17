import "./../../styles/main.scss";

const Navigation = () => {
  const logOutHandler = async function () {
    const response = await fetch("/api/users/logout", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("logged out!");
    } else {
      alert("Failed to log out");
    }
  };
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button className="nav__btn nav__btn--add-recipe">
            <svg className="nav__icon">
              <use href=""></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__btn nav__btn--bookmarks">
            <svg className="nav__icon">
              <use href=""></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <div className="bookmarks">
            <ul className="bookmarks__list">
              <div className="message">
                <div>
                  <svg>
                    <use href=""></use>
                  </svg>
                </div>
                <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
              </div>
            </ul>
          </div>
        </li>
        <li className="nav__item">
          <button
            onClick={logOutHandler}
            className="nav__btn nav__btn--add-recipe"
          >
            <svg className="nav__icon">
              <use href=""></use>
            </svg>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
