import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage, LoginPage } from "./pages/";

const PrivateRoute = ({ component, ...options }) => {
    const { user: { id = false } } = useSelector(state => state.users);
    
    if (id) return <Route {...options} component={component} />;

    return <Redirect from={options.location.pathname} to="/app/login" />
};


export default function Router() {

    return (
        <Switch>
            <PrivateRoute path="/app/dashboard" component={HomePage} />
            <Route path="/app/login" component={LoginPage} />
            <Redirect from="/" to="/app/dashboard" />
        </Switch>
    )
}

export { Router }