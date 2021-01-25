import React, {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserProvider;

export const useUser = () => {
    return useContext(UserContext)
}