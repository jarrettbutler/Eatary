import Header from "../components/Headers/Header";
import Ingredients from "../components/Ingredients/Ingredients";
import WeclomeMessage from "../components/Ingredients/WelcomeMessage";
import ErrorMessage from "../components/Ingredients/ErrorMessage";
import Preview from "../components/Recipe/Preview";
import "./../styles/main.scss";
import { useState } from "react";

function Home() {
  const [search, setSearchRes] = useState();
  const [att, setAtt] = useState();

  return (
    <div className="container">
      <Header setSearchRes={setSearchRes} />
      <Preview searchRes={search} setAtt={setAtt} />

      {search === undefined ? (
        <WeclomeMessage />
      ) : (
        <>
          {search.length === 0 ? (
            <ErrorMessage />
          ) : (
            <Ingredients attRes={att} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;
