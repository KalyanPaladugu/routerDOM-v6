import React from 'react'
import { useEffect,useHistory,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

export default function Dashboard() {
// let Navigate=useNavigate();
//     useEffect(() => {
//         if (window.location.pathname === '/dashboard') {
//           Navigate('/login')
//         }
       
//       }, [])
const [isLoggedin,setIsLoggedin]=useState(localStorage.getItem("loggedin"))

  return (
    <div>
        <h1>Welcome to Dashboards</h1>
  
     <PrivateRoute /> 
    </div>
   
  )
}
