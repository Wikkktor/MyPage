import React from "react";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
