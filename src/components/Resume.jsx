import React from "react";

function Resume() {
  return (
    <div>
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>More of my credentials.</h1>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Developer Consultant</h3>
                  <p>Sept 2019 - Present</p>
                </div>

                <div className="timeline-content">
                  <h4>GoGoSoon Pvt. Ltd</h4>
                  <p>
                    Collaborated on all stages of agile software development
                    lifecycle, from requirement gathering to production
                    releases. Tested websites and performed troubleshooting
                    prior to deployment. Acquired experience in developing
                    websites with ReactJS, NextJS, ExpressJS and Laravel. Wrote
                    Unit and Integration tests for the software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>BE - CSE</h3>
                  <p>2018 - 2022 (Expected)</p>
                </div>

                <div className="timeline-content">
                  <h4>Chennai Institute of Technology</h4>
                  <p>
                    Pursuing Bachelor's degree in the stream of Computer Science
                    with CGPA 9.1 . Actively participated and co-ordinated
                    various events conducted by my college. Mentored juniors by
                    solving doubts in their projects.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
