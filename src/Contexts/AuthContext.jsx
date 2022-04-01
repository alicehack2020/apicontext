import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth,setAuth]=useState(false)
    const [token,setToken]=useState("")

    const login=(token)=>{
        setAuth(true)
        setToken(token)
    }


  return  <AuthContext.Provider value={{isAuth,token,login}}>

  </AuthContext.Provider>
     
  
};

 