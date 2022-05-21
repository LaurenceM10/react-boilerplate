import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./features/login/views";
import RegisterPage from "./features/register/index";

function AppView() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />   
                </Routes>
            </div>
        </Router>
    );
}

export default AppView;
