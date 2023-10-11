import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function HomeAbout() {
  return (
    <>
      <section className="about-section padding">
  <div className="container">
    <div
      className="section-heading text-center mb-40 wow fade-in-bottom"
      data-wow-delay="200ms"
    >
      <h4 className="sub-heading">About Our Company</h4>
      <h2>
        Unlock the potential of your business <br />
        with creative design
      </h2>
    </div>
    <div className="row">
      <div
        className="col-md-4 text-right wow fade-in-bottom"
        data-wow-delay="300ms"
      >
        <div className="about-img img-1">
          <Image src="/assets/img/about-1.jpg" alt="img" width={400} height={500} />
        </div>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <div
          className="about-content wow fade-in-bottom"
          data-wow-delay="500ms"
        >
          <p>
            Redias a trusted name for providing assistants. Initially their main
            objective was to ensure the service they provide these people are
            loyal to their industry, experienced and main top professional.
            Financial experts support or help you to to find out which way you
            can raise your funds more.
          </p>
          <Link href="about.html" className="read-more">
            <i className="las la-arrow-right" />
          </Link>
          <h4>
            <span>
              A+ Ratting <b>Agency</b>
            </span>
          </h4>
        </div>
      </div>
      <div className="col-md-3 wow fade-in-bottom" data-wow-delay="400ms">
        <div className="about-img img-2">
          <Image src="/assets/img/about-2.jpg" alt="img" width={600} height={800} />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HomeAbout
