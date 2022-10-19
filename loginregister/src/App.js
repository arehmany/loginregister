import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Homepage from "./components/homepage/Homepage";
import { useState } from 'react';
import "./components/homepage/Homepage.css";
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Blog from "./components/pages/Blog"
import {Route,Routes} from 'react-router-dom';



// Main Function
function App() {

  const [user, setLoginUser] = useState({})
  return (
      <div style={{}}>
      
       {/* Routing of paths for all */}
      <Routes>
    

        <Route exact path="/" element={user && user._id ? (<Homepage setLoginUser={setLoginUser} />) : <Login setLoginUser={setLoginUser}/>}/>
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
          
        
      </Routes>
      
      
    
    </div>
    
  );
}

export default App
