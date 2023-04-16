import Header from "../components/Headers/Header";
import Ingredients from "../components/Ingredients/Ingredients";
import Preview from "../components/Recipe/Preview";
import "./../styles/main.scss";

function Home() {
  return (
    <div className="container">
      <Header />
      <Preview />
      <Ingredients />
    </div>
  );
}

export default Home;
