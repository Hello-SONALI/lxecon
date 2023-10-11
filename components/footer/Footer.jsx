import React from 'react'

function Footer() {
  return (
    <>
      <>
  <footer className="footer-wrapper">
    <div className="map-pattern light" />
    <div className="shape-pattern" />
    <div className="container">
      <div className="row footer-widgets">
        <div className="col-lg-3 col-md-6 footer-widget sm-padding">
          <h3 className="widget-title">About Redias</h3>
          <p>
            We successfully cope with tasks of varying complexity and, provide
            longterm guarantees and regularly master new technologies.
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 col-md-6 footer-widget sm-padding">
          <h3 className="widget-title">Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog Standard</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-widget sm-padding">
          <h3 className="widget-title">Contact</h3>
          <ul>
            <li>
              Flat 20, Reynolds Neck, North <br />
              Helenaville, FV77 8WS
            </li>
            <li>Mon-Sat:10.00 am to 7.00pm</li>
            <li>
              +33 4568 2488 <br />
              redias@example.com
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 footer-widget sm-padding">
          <h3 className="widget-title">Have a project in your mind?</h3>
          <a href="contact.html" className="contact-btn">
            Contact us
          </a>
        </div>
      </div>
      {/* /.footer-widgets */}
      <div className="footer-bottom">
        <div className="copyright-text">
          © <span id="currentYear" /> Redias, All Rights Reserved. Design By{" "}
          <a
            href="https://themeforest/user/dynamiclayers/portfolio"
            target="_blank"
          >
            DynamicLayers
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
        </ul>
      </div>
      {/* /.footer-bottom */}
    </div>
    {/* /.container */}
  </footer>
  {/* /.footer-wrapper */}
  <div id="scrollup">
    <button id="scroll-top" className="scroll-to-top">
      <i className="las la-arrow-up" />
    </button>
  </div>
</>

    </>
  )
}

export default Footer
