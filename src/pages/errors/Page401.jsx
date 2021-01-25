import React from 'react';
import {Typography} from "@material-ui/core";
//components
import Header from "../../components/Header/Header.jsx";

const Error404Page = (props) => {    
    return (
        <React.Fragment>
            <Header />
            <Typography variant="h5" color="error">
                Oops, You don't appear to have access that page :(
            </Typography>
        </React.Fragment>
    );
}
 
export default Error404Page;