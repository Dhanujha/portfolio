import React from "react";

function PortFolio() {
  return (
    <div>
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>

            <div
              style={{
                width: "100%",
                height: "20px",
                borderBottom: "1px solid black",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  backgroundColor: "#ffffff",
                  padding: "0 10px",
                }}
              >
                Will be updated Soon
              </span>
            </div>
          </div>
        </div>

        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div id="modal-01" className="popup-modal slider mfp-hide">
                <div className="media">
                  <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
                </div>

                <div className="description-box">
                  <h4>Liberty</h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <div className="categories">Web Development</div>
                </div>

                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a href="#" className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>

              <div id="modal-02" className="popup-modal slider mfp-hide">
                <div className="media">
                  <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
                </div>

                <div className="description-box">
                  <h4>Shutterbug</h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <div className="categories">Web Design</div>
                </div>

                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a href="#" className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>

              <div id="modal-03" className="popup-modal slider mfp-hide">
                <div className="media">
                  <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
                </div>

                <div className="description-box">
                  <h4>Clouds</h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <div className="categories">Web Design</div>
                </div>

                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a href="#" className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>

              <div id="modal-04" className="popup-modal slider mfp-hide">
                <div className="media">
                  <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
                </div>

                <div className="description-box">
                  <h4>Beetle</h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <div className="categories">Branding</div>
                </div>

                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a href="#" className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>

              <div id="modal-05" className="popup-modal slider mfp-hide">
                <div className="media">
                  <img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
                </div>

                <div className="description-box">
                  <h4>Lighthouse</h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <div className="categories">Web Development</div>
                </div>

                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a href="#" className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>

              <div id="modal-06" className="popup-modal slider mfp-hide">
                <div className="media">
                  <img src="images/portfolio/modals/m-salad.jpg" alt="" />
                </div>

                <div className="description-box">
                  <h4>Salad</h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <div className="categories">Branding</div>
                </div>

                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a href="#" className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortFolio;
