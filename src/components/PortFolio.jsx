import React, { useState } from "react";

function PortFolio() {
  return (
    <div>
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
          </div>
        </div>

        <div className="row portfolio-content">
          {Works.map((work, i) => {
            return <Card work={work} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default PortFolio;

function Card(props) {
  const [hover, setHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  let m = arrowHover ? 20 : 10;
  const { image, title, buttonText, redirectTo } = props.work;
  return (
    <div className="col-four" style={{ marginTop: 20 }}>
      <div
        style={
          hover
            ? {
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                borderRadius: "5px",
              }
            : { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={image}
          alt="Avatar"
          style={{
            width: "100%",
            borderRadius: "5px 5px 0 0",
            height: "226px",
          }}
        />
        <div
          style={{
            padding: "2px 16px",
          }}
        >
          <h4>
            <b>{title}</b>
          </h4>
          <label
            style={{ color: "#ff0077", cursor: "pointer", transition: "0.3s" }}
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
            onClick={() => window.open(redirectTo, "_blank")}
          >
            {buttonText}
            <i
              className="icon-arrow-right"
              style={{
                verticalAlign: "middle",
                marginLeft: m,
                transition: "0.3s",
              }}
            ></i>
          </label>
        </div>
      </div>
    </div>
  );
}

const Works = [
  {
    title: "See Midwives",
    image: "/images/portfolio/seem-1.png",
    buttonText: "Visit Website",
    redirectTo: "https://www.seemidwives.com/",
  },
  {
    title: "Mileage2Go",
    image: "/images/portfolio/mil.png",
    buttonText: "Visit Website",
    redirectTo: "https://mileage2go.com/",
  },
  {
    title: "Portfolio",
    image: "/images/portfolio/portfolio.png",
    buttonText: "View Code",
    redirectTo: "https://dhanujha.herokuapp.com",
  },
  {
    title: "Todo CLI",
    image: "/images/portfolio/todo.png",
    buttonText: "View Code",
    redirectTo: "https://github.com/Dhanujha/todo-cli",
  },
  {
    title: "Installing Wordpress (LEMP Stack)",
    image: "/images/portfolio/blog.jpg",
    buttonText: "Read Blog",
    redirectTo:
      "https://blog.gogosoon.com/installing-wordpress-using-lemp-stack-on-ubuntu-18-04/",
  },
  {
    title: "End to End Encrypted Notes App",
    image: "/images/portfolio/e2e.png",
    buttonText: "View Code",
    redirectTo: "https://gitlab.com/dhanujha_r/encrypted-notes-app",
  },
];
