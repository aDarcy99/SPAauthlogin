import React, { useContext } from "react";
import GoogleLogin from "../components/GoogleLoginButton/GoogleLoginButton.jsx";
import { Button } from "@material-ui/core";
import axios from "axios";
//context
import { useUser } from "../providers/UserProvider";
//
import auth from "../functions/clientAuth.js";
//components
import Header from "../components/Header/Header.jsx";
import UserInformation from "../components/UserInformation/UserInformation.jsx"

const IndexPage = (props) => {
    const userContext = useUser();
    return (
        <React.Fragment>
            <Header />
            <h3>HomePage</h3>
            <UserInformation user={userContext.user} />

            <h4>Tests</h4>
            <Button variant="outlined" onClick={() => { axios.get("/api/test/headers").then(res => console.log(res)) }}>Get headers</Button>
            <Button variant="outlined" onClick={() => {console.log(auth.getUserFromToken() || "No user") }}>Get user</Button>
        </React.Fragment>
    )
} 

export default IndexPage;