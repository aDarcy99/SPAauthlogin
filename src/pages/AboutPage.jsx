import React from 'react';
//context
import {useUser} from "../providers/UserProvider.jsx";
//functions
import auth from "../functions/clientAuth.js";
//components
import Header from "../components/Header/Header.jsx";
import UserInformation from "../components/UserInformation/UserInformation.jsx"


const AboutPage = (props) => {
    const userContext = useUser();
    return (
        <React.Fragment>
            <Header />
            About Page
            <UserInformation user={userContext.user}/>
        </React.Fragment>
    );
}
 
export default AboutPage;