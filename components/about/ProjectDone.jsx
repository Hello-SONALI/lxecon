import React from 'react'

function ProjectDone() {
  return (
    <>
     <section className="counter-section bg-grey section-2 padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 sm-padding">
        <div className="counter-item">
          <div className="counter-icon">
            <i className="dl dl-startup" />
          </div>
          <div className="counter-content">
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
      <div className="col-lg-3 col-md-6 sm-padding">
        <div className="counter-item">
          <div className="counter-icon">
            <i className="dl dl-team" />
          </div>
          <div className="counter-content">
            <h3>
              <span className="odometer" data-count={355}>
                00
              </span>
              +
            </h3>
            <h4>Satisfied Clients</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 sm-padding">
        <div className="counter-item">
          <div className="counter-icon">
            <i className="dl dl-dollar" />
          </div>
          <div className="counter-content">
            <h3>
              <span className="odometer" data-count={120}>
                00
              </span>
              +
            </h3>
            <h4>Expert Teams</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 sm-padding">
        <div className="counter-item">
          <div className="counter-icon">
            <i className="dl dl-award" />
          </div>
          <div className="counter-content">
            <h3>
              <span className="odometer" data-count={160}>
                00
              </span>
              +
            </h3>
            <h4>Awerd Won</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

export default ProjectDone
