import React from "react";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import TodoPage from "./pages/todo"
import Expenses from "./pages/expenses";
import ReactApps from "./pages/react_apps"

import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='react-apps' element={<ReactApps/>} />
                <Route path='/todo' element={<TodoPage/>}/>
                <Route path='/expenses' element={<Expenses/>} />


            </Routes>
        </BrowserRouter>
    )
}

export default App;
