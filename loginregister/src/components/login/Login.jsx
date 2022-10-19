import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from "react-router-dom"
import Topnavbar1 from '../navbar/Topnavbar1';



const Login = ({setLoginUser}) => {
  


  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  

  const handleChange =(e)=>{
    const {name, value} = e.target
    console.log(name, value)
    setUser({
      ...user,
      [name] : value
    })
  }

  const login =(e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/login", user)
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      Navigate("/");
    })
    .catch(err=>{
      console.log(err)
      })
      
  }

  

  return (
    <>
{/* Navbar Top */}
    <Topnavbar1/>

{/* Login Heading */}
    <h1 className='text-center mt-5  fs-5 fw-light'>Please Sign To Access The Home Page</h1>
{/* Login form */}
    <div className="Auth-form-container">
    <form className="Auth-form">
  
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3 ">
          <label>Email address</label>
          <input
            type="email"
            name='email'
            value={user.email}
            onChange={handleChange}
              
            className="form-control mt-1 "
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name='password'
            value={user.password}
            onChange={handleChange}
            className="form-control mt-1"
            placeholder="Current Password"
          />
        </div>
        <div className="d-grid gap-2 mt-4">
          <button type="submit" className="btn btn btn-outline-success btn-sm border-warning rounded-pill ms-5
          me-5"
          onClick={login}>
            Submit
          </button>
        </div>
        <span className="forgot-password text-center mt-2">
        <p className="button mt-4 ">Not Registered? <a  className='link-info h6' onClick={()=> Navigate("./register")}>Create Account</a></p>
        </span>
        </div>
      </form>
    </div>
  </>
  )
}

export default Login
