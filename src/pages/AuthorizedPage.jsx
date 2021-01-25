import React from "react";
import GoogleLogin from "../components/GoogleLoginButton/GoogleLoginButton.jsx";
import {Link} from "react-router-dom";
//components
import Header from "../components/Header/Header.jsx";
import UserInformation from "../components/UserInformation/UserInformation.jsx"

export default class IndexPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                Authorized page
            </React.Fragment>
        )
    }
} 