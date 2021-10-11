import React from "react";
import { Row, Col } from "react-bootstrap";
import img1 from "../src/pictures/proPic.jpg";

export default function aboutMe() {
  return (
    <div
      id={"section2"}
      style={{
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Row>
        <Col>
          <img
            style={{
              height: "90%",
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              borderRadius: "100%",
              borderStyle: "solid",
              borderColor: "white",
              marginTop: "2%",
            }}
            src={img1}
            alt="school "
          ></img>
        </Col>
        <Col>
          <span
            className="AboutMeSec"
            style={{
              textAlign: "center",
              paddingTop: "10%",
              paddingRight: "5%",
              paddingBottom: "2%",
              color: "white",
            }}
          >
            Hi, My name is Aldo Quintero. I'm a student at the full stack
            bootcamp through the University of California Riverside. Coding has
            always been part of my life since highschool it wasn't until 2021
            that i decided to pursue a career in coding. The bootcamp has helped
            me develope a better understanding of code and why its important to
            be involed in this field.
          </span>
          <h1 style={{ textAlign: "center", color: "white" }}>ABOUT ME</h1>
        </Col>
      </Row>
    </div>
  );
}
