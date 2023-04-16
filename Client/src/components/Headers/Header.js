import "./../../styles/main.scss";
import React, { useState } from "react";
import Navigation from "./Navigation.js";

const Header = ({setSearchRes}) => {
  
  const [UserInput, setUserInput] = useState("");
  // const [SearchRes, SetSearchRes] = useState([]);
  // const [target, setTarget] = useState("");
  // const [singleRec, setSingleRec] = useState("");

  const InputHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const SearchHandler = async (e) => {
    e.preventDefault();
    const Result = await fetch(`/api/recipes/find?search=${UserInput}`);
    const JsonResult = await Result.json();
    setSearchRes(JsonResult);
    console.log(JsonResult);
  };

  return (
    <header className="header">
      <img src="" alt="Logo" className="header__logo" />
      <form className="search" onSubmit={SearchHandler}>
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
          onChange={InputHandler}
        />
        <button className="btn search__btn" type='submit'>
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
