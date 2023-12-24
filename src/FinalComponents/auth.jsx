import React, { useContext, useState } from "react";
const AuthContext=React.createContext()
export const AuthProvider=({children})=>{
    const [name,setName]=useState(null)
    const login=(username)=>{
        setName(username)
    }
    const logout=()=>{
        setName(null)
    }
    return <AuthContext.Provider value={{name,login,logout}}>{children}</AuthContext.Provider>
}
export const useAuth=()=>{
    return useContext(AuthContext)
}