import { BrowserRouter, Routes, Route } from "react-router-dom";
import {router} from "./router";
import Home from "../pages/home";
import Faal from "../pages/faal";
function Routing() {
    const {home , faal} = router;

    return (
        
        <BrowserRouter>
        <Routes>
            <Route exact path={home} element={<Home />} />
            <Route exact path={faal} element={<Faal />} />

        </Routes>
    </BrowserRouter> 
        );
}

export default Routing;