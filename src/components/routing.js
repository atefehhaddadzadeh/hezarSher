import { BrowserRouter, Routes, Route } from "react-router-dom";
import {router} from "./router";
import Home from "../pages/home";
function Routing() {
    const {home} = router;

    return (
        
        <BrowserRouter>
        <Routes>
            <Route exact path={home} element={<Home />} />

        </Routes>
    </BrowserRouter> 
        );
}

export default Routing;