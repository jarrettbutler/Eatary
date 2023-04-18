import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageSignIn from "./pages/PageSignIn";
import PageSignUp from "./pages/PageSignUp";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<PageSignIn />} />
          <Route path="/signup" element={<PageSignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
