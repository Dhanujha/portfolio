import React from "react";

function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World!</h5>
              <h1>I'm Dhanujha.</h1>

              <p className="intro-position">
                <span>Full Stack Web Developer</span>
                <span>Freelancer</span>
              </p>

              <a className="button stroke smoothscroll" href="#about" title="">
                More About Me
              </a>
            </div>
          </div>
        </div>

        <ul className="intro-social">
          <li>
            <a href="https://www.facebook.com/dhanujha08" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Dhanujha08" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dhanujha/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/dhanujha" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_dha_nu_jha_/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="mailto:rampradha2016@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Intro;
