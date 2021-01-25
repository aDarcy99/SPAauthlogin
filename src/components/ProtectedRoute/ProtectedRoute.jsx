import React, { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";
//context
import { useUser } from "../../providers/UserProvider.jsx";
//functions
import auth from "../../functions/clientAuth.js";

const ProtectedRoute = ({ accessLevelRequired = 1, children, ...rest }) => {
    const userContext = useUser();
    const user = userContext.user;
    return (
        <Route
            {...rest}
            render={() => (
                // If user is not sign in, redirect to the assigned route
                user ?
                    //If user is signed in but doesnt have the required access level, redirect to the assigned route
                    user.accessLevel >= accessLevelRequired ?
                        (children)
                        : (
                            <Redirect
                                to={{
                                    pathname: "/401"
                                }}
                            />
                        )
                    : <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
            )}
        />
    );
}

export default ProtectedRoute;