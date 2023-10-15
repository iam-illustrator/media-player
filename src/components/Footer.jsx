import React from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%", height: "300px" }}
    >
      <div className="footer-content d-flex justify-content-evenly w-100">
        <div style={{ width: "400px" }} className="website">
          <h4>
            {" "}
            <i class="fa-solid fa-cloud-arrow-up"></i>Media Player
          </h4>
          <p>
            Designed and built with all the love in the world by the luminar
            team with the help of our contributors, <br />
            code licensed Luminar,docs CC BY 3.0. Currently v1.0.0
          </p>
        </div>

        <div className="links d-flex flex-column">
          <h4
            style={{
              marginBottom: "20px",
            }}
          >
            Links
          </h4>
          <Link
            to={"/home"}
            className="fs-4"
            style={{
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <h6>Home</h6>
          </Link>
          <Link
            to={"/"}
            className="fs-4"
            style={{
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <h6>Landing</h6>
          </Link>
          <Link
            to={"/history"}
            className="fs-4"
            style={{
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <h6>Watch History</h6>{" "}
          </Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4
            style={{
              marginBottom: "20px",
            }}
          >
            GUIDES
          </h4>
          <Link
            to={"https://react.dev/"}
            className="fs-4"
            style={{
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <h6>React</h6>
          </Link>
          <Link
            to={"https://react-bootstrap.github.io/"}
            className="fs-4"
            style={{
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <h6>React Bootsrap</h6>
          </Link>
          <Link
            to={"https://bootswatch.com/"}
            className="fs-4"
            style={{
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <h6>BootsWatch</h6>{" "}
          </Link>
        </div>
        <div className="contacts" style={{ width: "400px" }}>
          <h4>Contact us</h4>
          <Form inline>
            <Row>
              <Col s="auto">
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  className=" mr-sm-2"
                />
              </Col>
              <Col s="auto">
                <Button type="submit">Subscribe</Button>
              </Col>
            </Row>
          </Form>
          <div style={{marginTop:"10px"}}>
            <ul style={{listStyle:"none",fontSize:"25px",display:"flex",justifyContent:"space-evenly",marginRight:"90px"}}>
              <li><i class="fa-brands fa-linkedin-in"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-whatsapp"></i></li>
              <li><i class="fa-brands fa-x-twitter"></i></li>
              <li><i class="fa-brands fa-github"></i></li>
            </ul>
          </div>
        </div>
      </div>
      <p>Copyright 2023 Media Player. Built with React</p>
    </div>
  );
}

export default Footer;
