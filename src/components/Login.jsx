import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
const Login = () => {
 
  const [user,setUser]=useState()
  const [password,setPassword]=useState()

  const {login} =useContext(AuthContext)

  const userLogin=()=>{
       const obj={
        email:user,
        password:password
       }

      // console.log(obj);

       fetch("https://reqres.in/api/login",{
         method:"POST",
         body:JSON.stringify(obj),
         headers:{"Content-Type":"application/json"}
       }).then((res)=>res.json())
       .then((res)=>login(res.token))

  }

  return (
    <div>
    <h1>Login Form</h1>
    <div>
      <input type="text" name="" id="" value={user}  onChange={(e)=>setUser(e.target.value)}/>
      <input type="text" name="" id=""  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={userLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login