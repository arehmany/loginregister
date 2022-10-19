import React from "react";
import { Link } from "react-router-dom";


const Topnavbar2=()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">BRAND</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarScroll">
      <ul className="navbar-nav ms-auto mb-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog" tabIndex="-1" aria-disabled="true">Blog</Link>
        </li>
        
        <li className="nav-item">
  
          <a className="nav-link" href="./login" tabIndex="-1" aria-disabled="true">Logout</a>
        </li>

        
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Topnavbar2