import Header from "../components/Headers/Header";
import Ingredients from "../components/Ingredients/Ingredients";
import Preview from "../components/Recipe/Preview";
import "./../styles/main.scss";
import { useState } from "react";

function Home() {

const [search, setSearchRes] = useState()
console.log(search);

  return (
    <div className="container">
      <Header setSearchRes = {setSearchRes}/>
      <Preview searchRes = {search}/>
      <Ingredients />
    </div>
  );
}

export default Home;
