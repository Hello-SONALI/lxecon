import React from 'react'

function AboutCompany() {
  return (
    <>
<section className="about-section padding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 sm-padding">
        <div className="about-thumb">
          <h2 className="stroke-font">About Us</h2>
          <img src="assets/img/about-3.jpg" alt="img" />
          <div className="about-counter">
            <h3>
              <span className="odometer" data-count={145}>
                00
              </span>
              +
            </h3>
            <h4>Project Done</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-6 sm-padding">
        <div className="section-heading mb-20">
          <h4 className="sub-heading">About Our Company</h4>
          <h2>Unlock the potential of your business with creative design!</h2>
        </div>
        <div className="about-content">
          <h5>
            We Are A Digital Agency With Added Commercial Value For Your Startup
            Company Business!
          </h5>
          <p>
            Redias a trusted name for providing assistants. Initially their main
            objective was to ensure the service they provide these people are
            loyal to their industry, experienced and main top professional.
          </p>
          <a href="contact.html" className="default-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default AboutCompany
