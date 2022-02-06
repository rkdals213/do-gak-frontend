import React, {useState} from "react";
import * as Api from "../api";
import {LOCAL_STORAGE_KEY} from "../constants/key";
import {TokenContext} from "../hooks/useTokenContext";

const TokenProvider = ({children}) => {
    const [token, setToken] = useState(
        () => localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN) || ""
    );

    const resetToken = () => {
        setToken("");
        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, "");
    };

    return (
        <TokenContext.Provider value={{token, setToken, resetToken}}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenProvider;
