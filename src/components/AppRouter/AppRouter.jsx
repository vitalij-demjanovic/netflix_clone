import React from 'react';
import { connect } from "react-redux";
import { PublicRoute, PrivateRoute } from "../../router";
import { Redirect, Route, Switch } from "react-router-dom";
import { store } from "../../store/store";
import { LOG_IN } from "../../store/actions";

const AppRouter = (props) => {

    const currentToken = localStorage.getItem('token')
    if (currentToken) {store.dispatch({type: LOG_IN, isLoggedIn: true, token: currentToken})}

    return (
        props.isLoggedIn
        ?
            <Switch>
                {PrivateRoute.map((route) =>
                    <Route
                        key={route.id}
                        path={route.path}
                        component={route.element}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/home'/>
            </Switch>
            :
            <Switch>
                {PublicRoute.map((route) =>
                    <Route
                        key={route.id}
                        path={route.path}
                        component={route.element}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/signin'/>
            </Switch>
    );
};

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn, token: state.auth.token})
)(AppRouter);