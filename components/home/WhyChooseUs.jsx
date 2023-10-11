import React from 'react'
import Image from 'next/image'
function WhyChooseUs() {
  return (
    <>
      <>
  <section className="counter-section bg-dark">
    <div className="map-pattern light" />
    <div className="shape-pattern" />
    <div className="shape-pattern" />
    <div className="container">
      <div className="row">
        <div
          className="col-lg-3 col-md-6 sm-padding wow fade-in-bottom"
          data-wow-delay="200ms"
        >
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
        <div
          className="col-lg-3 col-md-6 sm-padding wow fade-in-bottom"
          data-wow-delay="300ms"
        >
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
        <div
          className="col-lg-3 col-md-6 sm-padding wow fade-in-bottom"
          data-wow-delay="400ms"
        >
          <div className="counter-item">
            <div className="counter-icon">
              <i className="dl dl-dollar" />
            </div>
            <div className="counter-content">
              <h3>
                <span className="odometer" data-count={125}>
                  00
                </span>
                +
              </h3>
              <h4>Expert Teams</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 sm-padding wow fade-in-bottom"
          data-wow-delay="500ms"
        >
          <div className="counter-item">
            <div className="counter-icon">
              <i className="dl dl-award" />
            </div>
            <div className="counter-content">
              <h3>
                <span className="odometer" data-count={168}>
                  00
                </span>
                +
              </h3>
              <h4>Award Won</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/.counter-section*/}
  <section className="skill-section" id="skillSection">
    <div className="container">
      <div className="row skill-section-wrap">
        <div className="col-lg-4">
          <div className="skill-img">
            <Image src="/assets/img/skill-img.jpg" alt="img" width={450} height={650}/>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="section-heading mb-40">
            <h4 className="sub-heading">Why Choose Us!</h4>
            <h2>
              We are a digital agency with <br />
              added value for your business!
            </h2>
          </div>
          <div className="skill-content-wrap">
            <div className="skill-item">
              <ul className="nav skill-tab-menu" id="skill-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="integrity"
                    data-bs-toggle="tab"
                    data-bs-target="#integrity-content"
                    type="button"
                    role="tab"
                    aria-controls="integrity-content"
                    aria-selected="true"
                  >
                    Integrity
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="objectives"
                    data-bs-toggle="tab"
                    data-bs-target="#objectives-content"
                    type="button"
                    role="tab"
                    aria-controls="objectives-content"
                    aria-selected="false"
                  >
                    Objectives
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="excellence"
                    data-bs-toggle="tab"
                    data-bs-target="#excellence-content"
                    type="button"
                    role="tab"
                    aria-controls="excellence-content"
                    aria-selected="false"
                  >
                    Excellence
                  </button>
                </li>
              </ul>
              {/*Tab Menu*/}
              <div className="tab-content" id="skill-tab-content">
                <div
                  className="tab-pane fade show active"
                  id="integrity-content"
                  role="tabpanel"
                  aria-labelledby="integrity-content"
                >
                  <div className="skill-tab-content">
                    <div className="tab-thumb">
                      <Image src="/assets/img/tab-img-1.jpg" alt="img" width={400} height={400} />
                    </div>
                    <ul className="tab-list">
                      <li>
                        <i className="las la-hand-point-right" />
                        Data Analytics
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Ico Management
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Site Program
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Visual Designing
                      </li>
                    </ul>
                  </div>
                  <div className="skill-progressbar">
                    <div className="skillbar" data-percent="55%">
                      <h4 className="skillbar-title">Digital Analysis</h4>
                      <div className="skill-bar-percent">95%</div>
                      <div className="skillbar-bar" style={{ width: "95%" }} />
                    </div>
                    <div className="skillbar" data-percent="55%">
                      <h4 className="skillbar-title">Mobile Development</h4>
                      <div className="skill-bar-percent">85%</div>
                      <div
                        className="skillbar-bar blue"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="objectives-content"
                  role="tabpanel"
                  aria-labelledby="objectives-content"
                >
                  <div className="skill-tab-content">
                    <div className="tab-thumb">
                      <Image src="/assets/img/tab-img-2.jpg" alt="img" width={400} height={400}/>
                    </div>
                    <ul className="tab-list">
                      <li>
                        <i className="las la-hand-point-right" />
                        Data Analytics
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Ico Management
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Site Program
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Visual Designing
                      </li>
                    </ul>
                  </div>
                  <div className="skill-progressbar">
                    <div className="skillbar" data-percent="55%">
                      <h4 className="skillbar-title">Digital Analysis</h4>
                      <div className="skill-bar-percent">95%</div>
                      <div className="skillbar-bar" style={{ width: "95%" }} />
                    </div>
                    <div className="skillbar" data-percent="55%">
                      <h4 className="skillbar-title">Mobile Development</h4>
                      <div className="skill-bar-percent">85%</div>
                      <div
                        className="skillbar-bar blue"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="excellence-content"
                  role="tabpanel"
                  aria-labelledby="excellence-content"
                >
                  <div className="skill-tab-content">
                    <div className="tab-thumb">
                      <Image src="/assets/img/tab-img-3.jpg" alt="img" width={400} height={400} />
                    </div>
                    <ul className="tab-list">
                      <li>
                        <i className="las la-hand-point-right" />
                        Data Analytics
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Ico Management
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Site Program
                      </li>
                      <li>
                        <i className="las la-hand-point-right" />
                        Visual Designing
                      </li>
                    </ul>
                  </div>
                  <div className="skill-progressbar">
                    <div className="skillbar" data-percent="55%">
                      <h4 className="skillbar-title">Digital Analysis</h4>
                      <div className="skill-bar-percent">95%</div>
                      <div className="skillbar-bar" style={{ width: "95%" }} />
                    </div>
                    <div className="skillbar" data-percent="55%">
                      <h4 className="skillbar-title">Mobile Development</h4>
                      <div className="skill-bar-percent">85%</div>
                      <div
                        className="skillbar-bar blue"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab Content */}
            </div>
            {/*/.skill-item*/}
            <ul className="skill-item-list">
              <li>
                <h4>Creative Ideas</h4>
                <p>Redias a trusted name for providing assistants.</p>
              </li>
              <li>
                <h4>100% Moneyback</h4>
                <p>Redias a trusted name for providing assistants.</p>
              </li>
              <li>
                <h4>24/7 Live Supports</h4>
                <p>Redias a trusted name for providing assistants.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default WhyChooseUs
