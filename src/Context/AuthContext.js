import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = () => {
    const [isAutenticated, setIsAuthenticated] = useState(false);

}