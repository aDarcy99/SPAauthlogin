import React from 'react';
import auth from "../../functions/clientAuth.js";
//context
import { useUser } from "../../providers/UserProvider.jsx";
//components
import Login from "react-google-login";


const GoogleLogin = (props) => {
    const userContext = useUser();
    return (
        !userContext.user ?
            <Login
                clientId={process.env.GOOGLE_CLIENT_ID} buttonText="Google Login"
                onSuccess={(res) => {
                    auth.login(res, (token) => {
                        userContext.setUser(auth.getUserFromToken());
                    })
                }}
                onFailure={""}
            />
            : ""
    );
}

export default GoogleLogin;