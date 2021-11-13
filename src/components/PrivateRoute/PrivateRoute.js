import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth()
    // if(isLoading){
    //     return <Spinner animation="border" variant="warning" />
    // }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            >

            </Redirect>}
        >



        </Route>
    );
};

export default PrivateRoute;