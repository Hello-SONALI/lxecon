import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function LatestBlogs() {
  return (
    <>
     <section className="blog-section bg-grey padding">
  <div className="container">
    <div
      className="section-heading text-center mb-40 wow fade-in-bottom"
      data-wow-delay="200ms"
    >
      <h4 className="sub-heading">Latest Article</h4>
      <h2>
        Tips and Advice <br />
        From Blog
      </h2>
    </div>
    <div className="row grid-post">
      <div
        className="col-lg-4 col-md-6 padding-15 wow fade-in-bottom"
        data-wow-delay="200ms"
      >
        <div className="post-card">
          <div className="post-thumb">
            <Image src="assets/img/post-1.jpg" alt="post" />
          </div>
          <div className="post-content-wrap">
            <ul className="post-meta">
              <li>
                <i className="las la-calendar" />
                Jan 01 2022
              </li>
              <li>
                <i className="las la-tags" />
                <Link href="#">Design</Link>
              </li>
            </ul>
            <div className="post-content">
              <h3>
                <Link href="blog-details.html" className="hover">
                  Start initiating find an startup in days.
                </Link>
              </h3>
              <p>
                Financial experts support or help you to to find out which way
                you can raise your funds more...
              </p>
              <Link href="blog-details.html" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 padding-15 wow fade-in-bottom"
        data-wow-delay="300ms"
      >
        <div className="post-card">
          <div className="post-thumb">
            <Image src="assets/img/post-2.jpg" alt="post" />
          </div>
          <div className="post-content-wrap">
            <ul className="post-meta">
              <li>
                <i className="las la-calendar" />
                Jan 01 2022
              </li>
              <li>
                <i className="las la-tags" />
                <Link href="#">Branding</Link>
              </li>
            </ul>
            <div className="post-content">
              <h3>
                <Link href="blog-details.html">
                  Financial experts are support find out.
                </Link>
              </h3>
              <p>
                Financial experts support or help you to to find out which way
                you can raise your funds more...
              </p>
              <Link href="blog-details.html" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 padding-15 wow fade-in-bottom"
        data-wow-delay="400ms"
      >
        <div className="post-card">
          <div className="post-thumb">
            <Image src="assets/img/post-3.jpg" alt="post" />
          </div>
          <div className="post-content-wrap">
            <ul className="post-meta">
              <li>
                <i className="las la-calendar" />
                Jan 01 2022
              </li>
              <li>
                <i className="las la-tags" />
                <Link href="#">Marketing</Link>
              </li>
            </ul>
            <div className="post-content">
              <h3>
                <Link href="blog-details.html">
                  Innovative business all over the world.
                </Link>
              </h3>
              <p>
                Financial experts support or help you to to find out which way
                you can raise your funds more...
              </p>
              <Link href="blog-details.html" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

export default LatestBlogs
