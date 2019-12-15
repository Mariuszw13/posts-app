import React from 'react'
import {useCookies} from 'react-cookie';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const [cookies] = useCookies(['authToken']);

    return <Route {...rest} render={props => cookies.authToken ?
        <Component {...props} />
        : <Redirect to="/login"/>}
    />
};

export default PrivateRoute;