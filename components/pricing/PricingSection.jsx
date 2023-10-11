import React from 'react'

function PricingSection() {
  return (
    <>
         <section className="pricing-section padding">
  <div className="container">
    <div className="row pricing-wrap no-gap">
      <div className="col-lg-4 col-md-6 sm-padding">
        <div className="pricing-item">
          <div className="pricing-head">
            <i className="dl dl-success" />
            <h3>Basic Plan</h3>
            <h2>
              $25 <span>/month</span>
            </h2>
          </div>
          <ul className="pricing-list">
            <li>Support Your Business</li>
            <li>Custom Design &amp; Features</li>
            <li>Unlimited Domains</li>
            <li>6 Months Premium Support</li>
            <li>Lifetime updates</li>
          </ul>
          <div className="pricing-footer">
            <a href="#" className="default-btn">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 sm-padding">
        <div className="pricing-item blue">
          <div className="pricing-head">
            <i className="dl dl-startup" />
            <h3>Standard Plan</h3>
            <h2>
              $50 <span>/month</span>
            </h2>
          </div>
          <ul className="pricing-list">
            <li>Support Your Business</li>
            <li>Custom Design &amp; Features</li>
            <li>Unlimited Domains</li>
            <li>6 Months Premium Support</li>
            <li>Lifetime updates</li>
          </ul>
          <div className="pricing-footer">
            <a href="#" className="default-btn">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 sm-padding">
        <div className="pricing-item">
          <div className="pricing-head">
            <i className="dl dl-team" />
            <h3>Premium Plan</h3>
            <h2>
              $75 <span>/month</span>
            </h2>
          </div>
          <ul className="pricing-list">
            <li>Support Your Business</li>
            <li>Custom Design &amp; Features</li>
            <li>Unlimited Domains</li>
            <li>6 Months Premium Support</li>
            <li>Lifetime updates</li>
          </ul>
          <div className="pricing-footer">
            <a href="#" className="default-btn">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default PricingSection
