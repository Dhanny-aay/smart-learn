import Home from "./home";
import Anime from "./anime";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";



const animatedroutes = () => {

    return ( 
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/nav" element={ <Anime /> } />
        </Routes>
    
     );
}
 
export default animatedroutes;