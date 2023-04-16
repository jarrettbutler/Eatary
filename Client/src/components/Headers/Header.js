import "./../../styles/main.scss";
import Navigation from "./Navigation.js";

const Header = () => {
  return (
    <header className="header">
      <img src="" alt="Logo" className="header__logo" />
      <form className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
          readOnly
        />
        <button className="btn search__btn">
          <svg className="search__icon">
            <use href=""></use>
          </svg>
          <span>Search</span>
        </button>
      </form>
      <Navigation />
    </header>
  );
};

export default Header;
