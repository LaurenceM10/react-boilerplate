import * as React from "react";
import { screen } from "@testing-library/react";
import renderWithRedux from "../../../utils/renderWithRedux";
import {Route, Router, Switch} from "react-router-dom";
import PrivateRoute from "../../../../src/app/components/privateRoute";
import {createMemoryHistory} from 'history'

it("redirects unauthenticated users to /login route", async () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] })
    const PrivateComponent = () => <>Private!</>
    const PublicComponent = () => <>Redirected!</>
    const preloadedState = { auth: { user: null, accessToken: null } };

    renderWithRedux(
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/home" component={PrivateComponent} />
                <Route exact path="/login" component={PublicComponent} />
            </Switch>
        </Router>,
        { preloadedState }
    )

    expect(screen.queryByText("Private!")).not.toBeInTheDocument();
    expect(screen.queryByText("Redirected!")).toBeInTheDocument();
});
