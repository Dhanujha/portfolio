import React, { useState } from "react";
const axios = require("axios");
function Contacts() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  function sendMessage() {
    if (name === null || subject === null) {
      setname("");
      setsubject("");
    }
    const data = JSON.stringify({
      name,
      email,
      subject,
      message,
    });
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((result) => {
        if (result.data.status == "success") {
          setisLoading(false);
          setisSuccess(true);
        }
      })
      .catch((err) => {
        setisLoading(false);
      });
  }

  return (
    <div>
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
          </div>
        </div>

        <div className="row contact-form">
          <div className="col-twelve">
            <form
              name="contactForm"
              id="contactForm"
              onSubmit={(event) => {
                event.preventDefault();
                setisLoading(true);
                sendMessage();
              }}
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    value={name}
                    minLength="2"
                    onChange={(event) => {
                      setname(event.target.value);
                    }}
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Email *"
                    value={email}
                    required
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(event) => {
                      setsubject(event.target.value);
                    }}
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Message *"
                    rows="10"
                    cols="50"
                    required
                    value={message}
                    onChange={(event) => {
                      setmessage(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="form-field">
                  <button className="submitform" type="submit">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>

            {isSuccess && (
              <div className="alert-box ss-success hideit">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            )}
            {isLoading && (
              <div>
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
