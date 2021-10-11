import { Row, Button } from "react-bootstrap";
import React from "react";
import Emailjs from "emailjs-com";
export default function Form() {
  function sendEmail(e) {
    e.preventDefault();
    Emailjs.sendForm(
      "service_61frzak",
      "template_0v3pwzh",
      e.target,
      "user_xNqWlh6HMiyGjetvsCSES"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }

  document.body.style.background =
    "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)";
  return (
    <div
      className="container border"
      style={{
        marginTop: "100px",
        width: "50%",
        marginBottom: "100px",
        background: "white",
        borderstyle: "solid",
      }}
    >
      <form onSubmit={sendEmail}>
        <h1 style={{ marginTop: "25px", textAlign: "center" }}>Contact Form</h1>
        <Row>
          <label style={{ textAlign: "center" }}>Name</label>
          <input
            type="text "
            name="name"
            style={{
              width: "250px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          ></input>
          <label style={{ textAlign: "center" }}>Email</label>
          <input
            type="email"
            name="user_email"
            style={{
              width: "250px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          ></input>
        </Row>
        <Row>
          <label style={{ textAlign: "center" }}>Message</label>
          <textarea
            style={{
              width: "450px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            name="message"
            rows="4"
          ></textarea>
        </Row>
        <Button
          type="submit"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "100px",
          }}
          variant="primary"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
