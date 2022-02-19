import React,{useEffect, useState} from 'react'
import { Navigate,Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function PrivateRoute(path,component,...rest) {
    
    const [isLoggedin,setIsLoggedin]=useState(localStorage.getItem("loggedin"))
  return (
    <div>
       {/* {props.children} */}
     {/* {isLoggedin !==null && <Navigate to="/dashboard"/> } */}
       <Routes>
       <Route path={path} element={component} {...rest}/> 
       </Routes>
        {isLoggedin ===null && <Navigate to="/login"/> }
       
    </div>
  )
}
