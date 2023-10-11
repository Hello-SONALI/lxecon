import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Feature() {
  return (
    <>
      <div className="slider-section bg-grey padding-bottom">
  <div className="map-pattern" />
  <div className="container">
    <div className="main-slider slider-controler">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-img">
            <Image
              src="/assets/img/slider-1.jpg"
              alt="img"
              className="kenburns"
              style={{ animationDuration: "12000ms" }}
              width={1296}
              height={500}
            />
          </div>
          <div className="slider-content-wrap">
            <div className="slider-content">
              <div className="slider-caption medium">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="0.3s">
                    Smart Business Solution!
                  </div>
                </div>
              </div>
              <div className="slider-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="0.5s">
                    Modern Digital <br />
                    Agency Solution!
                  </div>
                </div>
              </div>
              <div className="slider-btn">
                <Link
                  href="book-taxi.html"
                  className="default-btn"
                  data-animation="fade-in-bottom"
                  data-delay="0.9s"
                >
                  Get Free Consulting
                </Link>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</div>

    </>
  )
}

export default Feature
