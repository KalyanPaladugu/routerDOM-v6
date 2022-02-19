import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
function App() {
   const Navigate=useNavigate();
   const [isLoggedin,setIsLoggedin]=useState(localStorage.getItem("loggedin"))
  //To get location
  // const location=window.location.pathname;
  // console.log(location)
  return (
    <div >
     <Header />
     {/* <Content /> */}
  <div style={{marginLeft:300}}>
     <Routes >
     <Route path='/' element={<Content />} >
          {/* <Content /> */}
       </Route>
       <Route path='/about/' element={<About />} 
        strict>
         {/* <About /> */}
       </Route>
      <Route path='/contact' element={<Contact />}>
        </Route>
        
        {/* <Route path='/dashboard' element={<PrivateRoute />} > */}
           <Route path='/dashboard' element={<Dashboard />} /> 

           
          {/* </Route> */}
     
     <Route path='/login' element={<Login />} />
     <Route path='/logout' element={<PrivateRoute/>} >
   
       </Route>
     </Routes>


     </div>
     {/* // condition based url request */}
     {/* {location==="/" && <Content />}
     {location ==="/about" && <About />} */}
    </div>
  );
}

export default App;
