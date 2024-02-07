import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContaxtProvider = ({ children }) => {
    const [User, setUser] = React.useState(null)


    return (
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContaxtProvider