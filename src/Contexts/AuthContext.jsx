import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth,setAuth]=useState(false)
    const [token,setToken]=useState("")
    const navigate=useNavigate();

    const login=(token)=>{
        setAuth(true)
        setToken(token)
        navigate('/');   
    }
 const logout=()=>{
   setAuth(false)
 }

  return  <AuthContext.Provider value={{isAuth,token,login,logout}}>
{children}
  </AuthContext.Provider>
     
  
};

 