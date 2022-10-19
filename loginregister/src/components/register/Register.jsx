import React, {useState} from 'react'
import axios from "axios"
import Topnavbar1 from '../navbar/Topnavbar1';
// import {useHistory} from "react-router-dom"
import {useNavigate} from "react-router-dom"



// Register function for User Data
const Register = () => {
// const history = useHistory();
const Navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: ''
  });
  

  const handleChange =e=>{
    const {name, value} = e.target
    console.log(name, value)
    setUser({
      ...user,
      [name] : value
    })
  }

  const register = (e) => {
    
    e.preventDefault()
    const {name , email, password, reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword))
      {
        axios.post("http://localhost:4000/register", user)
        .then(res => {
        alert(res.data.message)
        
        Navigate("/login")
        
      
        })
        .catch(err=>{
          console.log(err)
        })    
  }
      else
      {
        
        alert("Invalid Input, Try Again")
      }  
  }

  return (
    <>
      <Topnavbar1/>
    <div>
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
       
          <h3 className="Auth-form-title">Sign up</h3>
          <div className="text-center">
            Already registered?
            <span className="link-primary" >
            <p className='h6'><a className='link-info' href='/login'
            onClick={()=> Navigate("./login")}>Log In</a></p>
            </span>
          </div>
          <div className="form-group mt-2">
            <label>Full Name</label>
            <input
              type="name"
              name='name'
              value={user.name}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name='email'
              value={user.email}
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name='password'
              value={user.password}
              className="form-control mt-1"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Re-Enter Password</label>
            <input
              type="password"
              name='reEnterPassword'
              value={user.reEnterPassword}
              className="form-control mt-1"
              placeholder="Re-enter Your Password"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-4 d-md-center">
            <button blue-900="true" type="submit" className="btn btn-outline-success btn-sm border-warning rounded-pill
            ms-5
            me-5"
              onClick={register} >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot password?
          </p>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Register
