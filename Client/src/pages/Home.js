import Header from "../components/Headers/Header";
import Ingredients from "../components/Ingredients/Ingredients";
import Preview from "../components/Recipe/Preview";
import "./../styles/main.scss";
import { useState } from "react";

function Home() {

const [search, setSearchRes] = useState();
const [att, setAtt] = useState();

  return (
    <div className="container">
      <Header setSearchRes = {setSearchRes}/>
      <Preview searchRes = {search} setAtt = {setAtt}/>
      <Ingredients attRes = {att}/>
    </div>
  );
}

export default Home;
