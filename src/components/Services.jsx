import React from "react";

function Services() {
  return (
    <div>
      <section id="services">
        <div className="overlay"></div>

        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Services</h5>
            <h1>What Can I Do For You?</h1>
          </div>
        </div>
        <div className="row services-content">
          <div className="services-list">
          <div className="service">
            <span className="icon">
              <i className="icon-earth"></i>
            </span>

            <div className="service-content">
              <h3>Webdesign</h3>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-window"></i>
            </span>

            <div className="service-content">
              <h3>Web Development</h3>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-toggles"></i>
            </span>

            <div className="service-content">
              <h3>UI/UX Design</h3>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
