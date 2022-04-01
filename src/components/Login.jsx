import React, { useState } from 'react'

const Login = () => {
 
  const [user,setUser]=useState()
  const [password,setPassword]=useState()

  const userLogin=()=>{
      console.log(user,password)
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