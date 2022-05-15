import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./features/login/views";

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
