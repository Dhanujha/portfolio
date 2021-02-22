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
                  <h3>Full Stack Web Developer</h3>
                  <p>Sept 2019 - Present</p>
                </div>

                <div className="timeline-content">
                  <h4>GoGoSoon Pvt. Ltd</h4>
                  <p>
                    Collaborated on all stages of systems development lifecycle,
                    from requirement gathering to production releases. Tested
                    websites and performed troubleshooting prior to deployment.
                    Fot experience in developing websites with ReactJS,
                    ExpressJS and Laravel. Wrote Unit and Integration tests for
                    the software.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Student Reporter</h3>
                  <p>July 2014 - June 2015</p>
                </div>

                <div className="timeline-content">
                  <h4>Chutti Vikatan Magazine</h4>
                  <p>
                    I was one among the 45 students selected from all over
                    TamilNadu for this Student Reporter Programme. I contributed
                    to the Information Bytes section of this Tamil magazine and
                    wrote creative stories which were published during the year
                    2013 - 2014.{" "}
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
                  <p>August 2018 - March 2022</p>
                </div>

                <div className="timeline-content">
                  <h4>Chennai Institute of Technology</h4>
                  <p>
                    Pursuing Bachelor's degree in the stream of Computer Science
                    with CGPA 9.1 . I've actively participated in various events
                    conducted by my college and also co-ordinated those events.
                    I mentored my juniors along with solving doubts in their
                    projects.{" "}
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
