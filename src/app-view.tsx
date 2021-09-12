import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./features/login/views";

function AppView() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppView;
