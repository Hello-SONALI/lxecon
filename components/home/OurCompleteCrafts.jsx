import React from 'react'

function OurCompleteCrafts() {
  return (
    <>
<section className="project-section bg-grey padding">
  <div className="container">
    <div className="section-heading-wrap mb-40">
      <div className="section-heading wow fade-in-left" data-wow-delay="200ms">
        <h4 className="sub-heading">Our Complete Crafts</h4>
        <h2>
          Market-leading digital <br />
          expertise at your fingertips!
        </h2>
      </div>
      <a
        href="projects.html"
        className="default-btn wow fade-in-right"
        data-wow-delay="300ms"
      >
        View All Projects
      </a>
    </div>
    <div className="project-carousel-wraper">
      <div className="project-carousel">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="project-item">
              <div className="project-thumb">
                <a href="project-details.html">
                  <img src="assets/img/project-1.jpg" alt="img" />
                </a>
              </div>
              <div className="project-content">
                <h4>
                  <a href="project-details.html">Tech App</a>
                </h4>
                <h3>
                  <a href="project-details.html">Branding the Digital Age</a>
                </h3>
                <a href="project-details.html" className="read-more">
                  Read More
                  <i className="las la-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-item">
              <div className="project-thumb">
                <a href="project-details.html">
                  <img src="assets/img/project-2.jpg" alt="img" />
                </a>
              </div>
              <div className="project-content">
                <h4>
                  <a href="project-details.html">Design</a>
                </h4>
                <h3>
                  <a href="project-details.html">Transform the Multi tech</a>
                </h3>
                <a href="project-details.html" className="read-more">
                  Read More
                  <i className="las la-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-item">
              <div className="project-thumb">
                <a href="project-details.html">
                  <img src="assets/img/project-3.jpg" alt="img" />
                </a>
              </div>
              <div className="project-content">
                <h4>
                  <a href="project-details.html">Branding</a>
                </h4>
                <h3>
                  <a href="project-details.html">
                    Crypto &amp; IOS UI Kit Deisgn
                  </a>
                </h3>
                <a href="project-details.html" className="read-more">
                  Read More
                  <i className="las la-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-item">
              <div className="project-thumb">
                <a href="project-details.html">
                  <img src="assets/img/project-4.jpg" alt="img" />
                </a>
              </div>
              <div className="project-content">
                <h4>
                  <a href="project-details.html">Design</a>
                </h4>
                <h3>
                  <a href="project-details.html">Finance &amp; Banking Apps</a>
                </h3>
                <a href="project-details.html" className="read-more">
                  Read More
                  <i className="las la-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Dots */}
      <div className="carousel-pagination" />
    </div>
  </div>
</section>

    </>
  )
}

export default OurCompleteCrafts
