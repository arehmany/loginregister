import React from 'react'
import Topnavbar2 from '../navbar/Topnavbar2'
import imagecard1 from "./homeCardsImages/card1.jpg"
import imagecard2 from "./homeCardsImages/card2.jpg"
import imagecard3 from "./homeCardsImages/card3.jpg"



const Homepage = ({setLoginUser}) => {
  return (
    
    <div>     
            <Topnavbar2/>

{/* Jumbotron Text */}
            <div className="container ms">
            <div className="jumbotron text-center mt-1">
            <h1 className="display-4">The lowest prices, guaranteed.</h1>
            <p className="lead ms-4 me-4">We offer many of the exact same courses you'll find on other sites, but for the lowest possible price. We'll beat any advertised price from any of our competitors.</p>
            <hr className="my-4"/>
            <p className='text ms-2 me-2'>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg mb-3" href="#" role="button">Explore More</a>
          </div>
            </div>

{/*carsoul pictures  */}
            <div className='container'>
            <div id="carouselExampleDark" class="carousel carousel-dark slide pt-6 pb-6 mt-1 d-block w-100" data-bs-ride="carousel">

            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={imagecard1} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={imagecard2} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={imagecard3} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
                 
            </div>
{/* Cards Heading */}
              <div className='container'>
              <div className='text-center'>
              <h1 className='text-dark text-center mt-1 mb-1 pt-4 pb-4 bg-light'>Latest Releases</h1>
              </div>
              </div>


{/* Cards  */}
          <div className='container'>
          <div className="row row-cols-2 row-cols-md-4 g-2">
            <div className="col">
              <div className="card">
                <img src={imagecard1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span className="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={imagecard2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span className="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={imagecard3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  <h5><span className="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <img src={imagecard2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span class="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>
            

            <div className="col">
              <div class="card">
                <img src={imagecard2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span class="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card">
                <img src={imagecard2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span class="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card">
                <img src={imagecard2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span class="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>


            <div className="col">
              <div class="card">
                <img src={imagecard2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span class="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>


            <div className="col">
              <div class="card">
                <img src={imagecard2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <h5><span class="badge rounded-pill bg-primary">Price: 500$</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      
     
    </div>
  )
}

export default Homepage
