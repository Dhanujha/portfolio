import React from "react";

function About1() {
  return (
    <div className="row about-content">
      <div className="col-twelve">
        <h3 style={{ color: "#ff0077" }}>Skills</h3>
        <div className="col-five">
          <h2>Libraries &amp; Frameworks</h2>
          <div className="col-six">
            <ul>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="col-six">
            <ul>
              <li>ExpressJS</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
        <div className="col-three">
          <h2>DBMS </h2>
          <br />
          <div className="col-twelve">
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
        <div className="col-four">
          <h2>Others</h2>
          <br />
          <div className="col-twelve">
            <ul>
              <li>Socket.io</li>
              <li>LEMP/LAMP Stack</li>
              <li>GraphQL</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className="col-twelve">
          <h2>Languages</h2>
          <div className="col-three">
            <ul>
              <li>JS &amp; TS</li>
            </ul>
          </div>
          <div className="col-three">
            <ul>
              <li>Java</li>
            </ul>
          </div>
          <div className="col-three">
            <ul>
              <li>C++</li>
            </ul>
          </div>
          <div className="col-three">
            <ul>
              <li>PHP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
