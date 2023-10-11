import React from 'react'

function Banner() {
  return (
    <>
      <div id="sidebox-overlay" />
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7 sm-padding">
          <div className="hero-content">
            <h3>
              <i className="las la-bolt" />
              Trusted Digital Agency!
            </h3>
            <h2>Smart Ideas For Your Brands Are Here!</h2>
            <p>
              Our success in creating business solutions is due in large part to{" "}
              <br />
              our talented and highly committed team.
            </p>
            <div className="btn-holder">
              <a href="#" className="default-btn">
                Discover More
              </a>
              <a
                className="play-btn dl-video-popup"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=ZLaG1migE00"
              >
                <span className="play-icon">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    />
                  </svg>
                </span>
                <span className="play-btn-txt">Watch Video</span>
              </a>
              <img
                className="hero-arrow"
                src="assets/img/arrow-img.png"
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div className="col-md-5 d-none d-md-block">
          <div className="brands-circle">
            <div className="inner-icon">
              <i className="lab la-hubspot" />
              <i className="lab la-dribbble" />
            </div>
            <div className="center-icon">
              <i className="lab la-earlybirds" />
            </div>
            <div className="outer-icon">
              <i className="lab la-behance" />
              <i className="lab la-gitlab" />
              <i className="lab la-itunes-note" />
              <i className="lab la-slack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Banner
