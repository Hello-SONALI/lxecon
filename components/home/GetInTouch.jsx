import React from 'react'

function GetInTouch() {
  return (
    <>
    <section className="call-back-section padding">
  <div className="map-pattern" />
  <div className="container">
    <div
      className="section-heading text-center mb-40 wow fade-in-bottom"
      data-wow-delay="200ms"
    >
      <h4 className="sub-heading">Get In Touch!</h4>
      <h2>
        Want to know why your website isn’t <br />
        getting the traffic it deserves?
      </h2>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-4 d-none d-lg-block">
        <div className="callback-men">
          <img src="assets/img/callback-men.png" alt="img" />
        </div>
      </div>
      <div className="col-lg-6 col-md-8 offset-lg-0 offset-md-2">
        <div className="callback-form ml-40">
          <h2>Request a Callback</h2>
          <form
            action="quote.php"
            method="post"
            id="ajax_contact"
            className="form-horizontal"
          >
            <div className="callback-form-group">
              <div className="form-field">
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  id="contactPhone"
                  name="contactPhone"
                  className="form-control"
                  placeholder="Phone"
                  required=""
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="form-control"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="form-field message">
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  cols={30}
                  rows={4}
                  className="form-control"
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="form-field">
                <button id="submit" className="default-btn" type="submit">
                  Send Massage
                  <span />
                </button>
              </div>
            </div>
            <div id="form-messages" className="alert" role="alert" />
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  
    </>
  )
}

export default GetInTouch
