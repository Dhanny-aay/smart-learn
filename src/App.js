import Home from "./home";
import Anime from "./anime";
import Animatedroutes from "./animatedroutes";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Graph from "./graph";

function App() {
  return (
    <Router>
      <Animatedroutes />
    </Router>


    // <Anime />
  );
}

export default App;
