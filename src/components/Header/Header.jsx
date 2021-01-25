import { Box, Divider } from '@material-ui/core';
import React from 'react';
//components
import Link from "../common/Link.jsx";
import GoogleLoginButton from "../GoogleLoginButton/GoogleLoginButton.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

const Header = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/authorized-page">Authorized Page</Link>
            <GoogleLoginButton />
            <LogoutButton />
        </div>
    );
}
 
export default Header;