import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Blogpic from "../src/pictures/blog.jpg";

export default function projectSection() {
  return (
    <div className="projectSection" id={"section3"}>
      <Row
        style={{
          textAlign: "center",
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)",
          color: "white",
        }}
      >
        {" "}
        <h1>PROJECTS</h1>
      </Row>
      <Row
        style={{
          padding: "2%",
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)",
        }}
      >
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img variant="top" src={Blogpic} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Blog Post Website
              </Card.Title>
              <Button
                href="https://peaceful-hollows-57596.herokuapp.com/"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="primary"
              >
                launch
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img
              variant="top"
              src={require("../src/pictures/notetaker.jpg").default}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {" "}
                Notetaker
              </Card.Title>
              <Button
                href="https://agile-everglades-77525.herokuapp.com/"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="primary"
              >
                launch
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img
              variant="top"
              src={require("../src/pictures/passwordgen.jpg").default}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {" "}
                Password Generator{" "}
              </Card.Title>
              <Button
                href="https://aldoquin.github.io/Password-Generator/"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="primary"
              >
                launch
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          padding: "2%",
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)",
        }}
      >
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img
              variant="top"
              style={{ height: "195px", width: "100%" }}
              src={require("../src/pictures/weatherapp.jpg").default}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {" "}
                Weather App
              </Card.Title>
              <Button
                href="https://aldoquin.github.io/Weather_app/"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="primary"
              >
                launch
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img
              variant="top"
              style={{ height: "195px", width: "100%" }}
              src={require("../src/pictures/quiz.jpg").default}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Quiz Taker Game
              </Card.Title>
              <Button
                href="https://aldoquin.github.io/Quiz-game/"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="primary"
              >
                launch
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img
              variant="top"
              style={{ height: "195px", width: "100%" }}
              src={require("../src/pictures/project-2.jpg").default}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Team Portfolio
              </Card.Title>
              <Button
                href="https://evening-bayou-30737.herokuapp.com/"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="primary"
              >
                launch
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
