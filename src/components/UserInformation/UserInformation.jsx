import React from 'react';

const UserInformation = (props) => {
    const user = props.user
    return (
        <div>
            <h5>{user ? user.displayName: ""}</h5>
            <h6>{user ? user.email : ""}</h6>
        </div>
    );
}
 
export default UserInformation;