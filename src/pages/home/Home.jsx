import React from 'react'
import './style.css'

function Home() {
  return (
    <section>
        <div className="banner p-3 p-md-5 text-center text-white">
            <img src="https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png" alt="" width='200px' />
                <h1 className="display-5 fw-bold">Rocket Shots</h1>
                <p className="fs-6">Your Rocket Journey to the Creative Digital Space.</p>
        </div>
     <div className='main bg-dark'>
     <div className="container p-3 p-md-5">
  {/* Section Heading */}
  <div className=" mb-4 text-white">
    <h1 className="display-6 fw-bold"><span className="text-success">Connect</span> with Us</h1>
    <p className="text-secondary fs-6">Explore our platforms and stay updated with the latest updates and information.</p>
    <hr />
  </div>

  <div className="row">
    {/* Website Card */}
    <div className="col-md-6 mt-3">
      <div className="website p-3 rounded-4">
        <div className="row">
          <div className="col-md-3">
            <i className="d-block mb-3 bi bi-globe display-1"></i>
          </div>
          <div className="col-md-9">
            <h2 className="fs-2 fw-bold">Official Website</h2>
            <p className="fs-5 text-muted">Explore our official website for detailed information and services.</p>
            <hr />
            <a href="https://www.rocketshots.in/"  target='_blank'  className="btn btn-dark px-4 rounded-pill">Visit <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>

    {/* Instagram Card */}
    <div className="col-md-6 mt-3">
      <div className="insta p-3 rounded-4">
        <div className="row">
          <div className="col-md-3">
            <i className="d-block mb-3 bi bi-instagram display-1"></i>
          </div>
          <div className="col-md-9">
            <h2 className="fs-2 fw-bold">Instagram Page</h2>
            <p className="fs-5 text-muted">Follow us on Instagram for exciting updates and stories.</p>
            <hr />
            <a href="/"  target='_blank' className="btn btn-dark px-4 rounded-pill">Visit <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>

    {/* YouTube Card */}
    <div className="col-md-6 mt-3">
      <div className="youtube p-3 rounded-4 bg-danger">
        <div className="row">
          <div className="col-md-3">
            <i className="d-block mb-3 bi bi-youtube display-1 text-white"></i>
          </div>
          <div className="col-md-9">
            <h2 className="fs-2 fw-bold text-white">YouTube Channel</h2>
            <p className="fs-5 text-white-50">Watch our videos and subscribe to our channel for updates.</p>
            <hr />
            <a href="https://www.youtube.com/@rocketshotsentertainment" target='_blank' className="btn btn-light px-4 rounded-pill">Visit <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>

    {/* WhatsApp Card */}
    <div className="col-md-6 mt-3">
      <div className="whatsapp p-3 rounded-4 bg-success">
        <div className="row">
          <div className="col-md-3">
            <i className="d-block mb-3 bi bi-whatsapp display-1 text-white"></i>
          </div>
          <div className="col-md-9">
            <h2 className="fs-2 fw-bold text-white">WhatsApp Support</h2>
            <p className="fs-5 text-white-50">Connect with us on WhatsApp for instant support and queries.</p>
            <hr />
            <a href="https://wa.me/+919740007832" target='_blank' className="btn btn-light px-4 rounded-pill">Contact now <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     </div>
     <div className="p-3 p-md-5">
        <h1 className="fs-3 fw-bold">SKY IS NOT THE LIMIT</h1>
     </div>
<footer className="p-3 p-md-5 text-center text-white bg-black">
    <p className="fs-6 mb-0">&copy; Copyrights 2025. All rights Reserved</p>
</footer>
    </section>
  )
}

export default Home