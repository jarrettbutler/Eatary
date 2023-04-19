import Header from "../components/Headers/Header";
import Ingredients from "../components/Ingredients/Ingredients";
import WeclomeMessage from "../components/Ingredients/WelcomeMessage";
import ErrorMessage from "../components/Ingredients/ErrorMessage";
import Preview from "../components/Recipe/Preview";
import "./../styles/main.scss";
import { useState, useEffect } from "react";

function Home() {
  const [search, setSearchRes] = useState();
  const [att, setAtt] = useState();
  const [data, setData] = useState();

  useEffect(() => {}, [att]);

  return (
    <div className="container">
      <Header setSearchRes={setSearchRes} setAtt={setAtt} setData={setData} />
      <Preview searchRes={search} setAtt={setAtt} />

      {!att && data === undefined ? (
        <WeclomeMessage />
      ) : (
        <>{!data && !att ? <ErrorMessage /> : <Ingredients attRes={att} />}</>
      )}
    </div>
  );
}

export default Home;
