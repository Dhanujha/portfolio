import React from "react";

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
                I am a Full stack web Developer with professional experience
                with developing websites using ReactJs, ExpressJS and MySQL. I
                have good experience in other frameworks like NextJS and Laravel
                and developed applications using that. I actively participate in
                coding challenges and solve problems using Python, PHP and
                Javascript. I love exploring new technologies and bringing to my
                other projects.
              </p>
            </div>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-twelve">
            <h3 style={{ color: "#ff0077" }}>Skills</h3>

            <div className="col-twelve">
              <h2>Libraries and Frameworks</h2>

              <div className="row">
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/reactjs.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/nextjs.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/laravel.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/ExpressJS.png" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-twelve">
              <h2>Languages</h2>

              <div className="row">
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/php.svg" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/python.svg" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/typescript.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/cpp_logo.png" />
                  </p>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/nodejs.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/javascript.png" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-twelve">
              <br />
              <h2>DBMS</h2>

              <div className="row">
                <div
                  className="col-five tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/mongodb.jpg" />
                  </p>
                </div>
                <div
                  className="col-five tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/redis.png" />
                  </p>
                </div>
                <div
                  className="col-five tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/mysql.png" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-twelve">
              <h2>Others</h2>

              <div className="row">
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/nginx.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/linux.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/git.png" />
                  </p>
                </div>
                <div
                  className="col-four tab-full"
                  style={{ height: 100, width: 200 }}
                >
                  <p>
                    <img src="images/graphql.png" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
