import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-six tab-full pull-right social">
            <ul className="footer-social">
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
                <a
                  href="https://www.instagram.com/_dha_nu_jha_/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rampradha2016@gmail.com"
                  target="_blank"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-eight tab-full">
            <div className="copyright">
              <span>© Copyright 2020 </span>
              <span>
                Made with <i className="fa fa-heart"></i> by Dhanujha R
              </span>
            </div>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="fa fa-long-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
