import React from 'react'
import Image from 'next/image'
function MiniSlider() {
  return (
    <>
      <>
  <div className="sponsor-section padding">
    <div className="container">
      <div className="outside-spacing">
        <div className="sponsor-carousel">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src="/assets/img/sponsor01.png" alt="client"width={133} height={50}/>
            </div>
            <div className="swiper-slide">
              <Image src="/assets/img/sponsor02.png" alt="client" width={133} height={50}/>
            </div>
            <div className="swiper-slide">
              <Image src="/assets/img/sponsor03.png" alt="client" width={133} height={50}/>
            </div>
            <div className="swiper-slide">
              <Image src="/assets/img/sponsor04.png" alt="client" width={133} height={50}/>
            </div>
            <div className="swiper-slide">
              <Image src="/assets/img/sponsor05.png" alt="client" width={133} height={50}/>
            </div>
            <div className="swiper-slide">
              <Image src="/assets/img/sponsor06.png" alt="client" width={133} height={50}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.sponsor-section */}
</>

    </>
  )
}

export default MiniSlider
