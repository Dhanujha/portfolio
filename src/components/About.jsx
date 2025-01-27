import React from "react";
import About1 from "./About1";

function About() {
  return (
    <div>
      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>

            <div className="intro-info">
              <img src="images/personal.jpeg" alt="Profile Picture" />

              <p className="lead">
                I am a Full stack Web and Mobile Apps Developer having
                professional experience with developing websites and mobile apps
                using ReactJS, ReactNative and ExpressJS. I actively participate
                in coding challenges and solve problems using Javascript. I love
                exploring new technologies and solving real time problems.
              </p>
            </div>
          </div>
        </div>
        <About1 />

        <div className="row button-section">
          <div className="col-twelve">
            <a
              href="#contact"
              title="Hire Me"
              className="button stroke smoothscroll"
            >
              Hire Me
            </a>
            <a
              href="Dhanujha_Resume.pdf"
              title="View Resume"
              className="button button-primary"
              target="_blank"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
