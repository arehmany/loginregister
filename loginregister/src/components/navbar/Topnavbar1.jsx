import React from "react";



const Topnavbar1=()=> {
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
          
          {/* <span class="badge bg-info rounded-pill text-dark "><a className="nav-link active fs-6" aria-current="page" href="/">Home</a></span> */}
          <a className="nav-link active badge rounded-pill bg-info  position-relative fs-6 mt-2 me-3" aria-current="page" href="/"><span className='text-center fs-6 text-dark fw-light m-0'>Home</span>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fw-light">
            Pr</span>
        </a>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/Contact" tabIndex="-1" aria-disabled="true">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Blog" tabIndex="-1" aria-disabled="true">Blog</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Topnavbar1