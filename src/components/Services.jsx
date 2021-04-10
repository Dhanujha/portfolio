import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="overlay"></div>

      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Services</h5>
          <h1>What I Can Do For You?</h1>
        </div>
      </div>
      <div className="row section-intro">
        <div className="services-list">
          <div className="col-six">
            <span className="icon">
              <i className="icon-earth"></i>
            </span>

            <div className="service-content">
              <h3>Websites</h3>
            </div>
          </div>

          <div className="col-six">
            <span className="icon">
              <i className="icon-window"></i>
            </span>

            <div className="service-content">
              <h3>Mobile Apps</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
