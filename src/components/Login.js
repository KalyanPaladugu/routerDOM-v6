import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [isLoggedin,setIsLoggedin]=useState(localStorage.getItem("loggedin"))
   
    const Navigate=useNavigate();
    const login =(e)=>{
        e.preventDefault()
        if(username==="admin" && password==="admin"){
           localStorage.setItem("loggeding",1);
            setIsLoggedin(1)
            
        }
        else {
            alert("Wrong username/password")
        }
    }


  return (
    <div>
        <h1>Login form</h1>
  <form onSubmit={login}>
      <input type="text"  placeholder='username'
       value={username} onChange={(e)=> setUserName(e.target.value)}
       className="form-control-lg m-4 border"
      />
      <br />

      <input type="password" placeholder='password'
       value={password} onChange={(e)=> setPassword(e.target.value)}
       className="form-control-lg m-4 border"
      />
      <br />
      <button type='submit' className='btn btn-primary'>Login</button>
      {isLoggedin !==null && Navigate('/dashboard')}
  </form>
    </div>
  )
}
