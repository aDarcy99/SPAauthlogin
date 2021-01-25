import React from 'react';
import { Button } from "@material-ui/core";
//context
import { useUser } from "../../providers/UserProvider.jsx";
//functions
import auth from "../../functions/clientAuth.js";


const LogoutButton = () => {
    const userContext = useUser();

    const onLogoutButtonClick = (Event) => {
        auth.logout(() => {
            userContext.setUser(null);
        })
    }
    return (
        userContext.user ?
            <Button variant="outlined" color="primary" onClick={onLogoutButtonClick}>Logout</Button>
            : ""
    );
}

export default LogoutButton;