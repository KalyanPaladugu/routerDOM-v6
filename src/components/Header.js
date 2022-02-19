import Reac,{useState} from 'react'
import { Link,useNavigate,NavLink } from 'react-router-dom'
// import isLoggedin from './Login'

export default function Header() {
  const [isLoggedin,setIsLoggedin]=useState(localStorage.getItem("loggedin"))
 let Navigate=useNavigate()

  // let logout=()=>{
  //   // localStorage.clear();
  //   if(!isLoggedin){
  //    Navigate('/login')
  //   }
  // }
  return (
    <nav className="navbar  bg-dark justify-content-center">
    
      <li className="nav-link">
        <NavLink className='nav-link' to="/" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >Refresh</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link' to="/menu" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >Sidebar</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link'  to="/dashboard" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >Dashboard</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link' to="/projects" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >My Projects</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link' to="/topics" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >My Topics</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link ' to="/about" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >About</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link ' to="/contact" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >Contact us</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link' to="/login" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >Login</NavLink>
      </li>
      <li className="nav-link">
        <NavLink className='nav-link' to="/logout" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')}
        onClick={()=> {localStorage.clear()
         
         
       }}
      
        >Logout</NavLink>
      </li>
    </nav>
  )
}
