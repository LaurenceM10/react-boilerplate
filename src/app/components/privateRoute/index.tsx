import React from 'react';
import {useAppSelector} from "app/store";
import {selectCurrentUser} from "features/authentication/slice";
import {Route, Redirect, RouteProps} from "react-router-dom";

type PrivateRouteProps = {
    component: React.ComponentType<any>;
} & RouteProps;

function PrivateRoute({ component, ...rest }: PrivateRouteProps) {
    const user = useAppSelector(selectCurrentUser)
    const ComponentToRender = component;

    return (
        <Route
            {...rest}
            render={props => user ? (
                    <ComponentToRender {...props} />
                ) :  (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
            }
        />
    );
}

export default PrivateRoute;
