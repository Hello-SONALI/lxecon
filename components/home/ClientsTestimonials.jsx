import React from 'react'

function ClientsTestimonials() {
  return (
    <>
<section className="testimonial-section padding">
  <div className="map-pattern" />
  <div className="container">
    <div
      className="section-heading text-center mb-40 wow fade-in-bottom"
      data-wow-delay="200ms"
    >
      <h4 className="sub-heading">Clients Testimonials</h4>
      <h2>
        What our customers tell about <br />
        our service!
      </h2>
    </div>
    <div className="row align-items-center">
      <div
        className="col-md-3 d-none d-md-block wow fade-in-left"
        data-wow-delay="200ms"
      >
        <img src="assets/img/testimonial-left-image.png" alt="img" />
      </div>
      <div className="col-md-6">
        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="quote-icon">
                    <i className="las la-quote-right" />
                  </div>
                  <p>
                    Redias a trusted name for providing assistants. Initially
                    their main objective was to ensure the service they provide
                    these people are loyal to their industry, experienced and
                    main top professional. Financial experts support{" "}
                  </p>
                  <div className="testi-author">
                    <div className="author-thumb">
                      <img src="assets/img/comment-1.png" alt="author" />
                    </div>
                    <div className="author-info">
                      <h3>Eredrik Johanson</h3>
                      <h4>Financial .INC</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="quote-icon">
                    <i className="las la-quote-right" />
                  </div>
                  <p>
                    Redias a trusted name for providing assistants. Initially
                    their main objective was to ensure the service they provide
                    these people are loyal to their industry, experienced and
                    main top professional. Financial experts support{" "}
                  </p>
                  <div className="testi-author">
                    <div className="author-thumb">
                      <img src="assets/img/comment-2.png" alt="author" />
                    </div>
                    <div className="author-info">
                      <div className="author-info">
                        <h3>Félix Lengyel</h3>
                        <h4>Corporate .INC</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="quote-icon">
                    <i className="las la-quote-right" />
                  </div>
                  <p>
                    Redias a trusted name for providing assistants. Initially
                    their main objective was to ensure the service they provide
                    these people are loyal to their industry, experienced and
                    main top professional. Financial experts support{" "}
                  </p>
                  <div className="testi-author">
                    <div className="author-thumb">
                      <img src="assets/img/comment-3.png" alt="author" />
                    </div>
                    <div className="author-info">
                      <h3>Brandon Larned</h3>
                      <h4>Marketing .INC</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-pagination" />
          {/* Carousel Dots */}
        </div>
      </div>
      <div
        className="col-md-3 d-none d-md-block wow fade-in-right"
        data-wow-delay="300ms"
      >
        <img src="assets/img/testimonial-right-image.png" alt="img" />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ClientsTestimonials
