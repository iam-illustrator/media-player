import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import View from "../components/View";
import Category from "../components/Category";

function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <>
      <div className="title container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </div>
        <h4>
          <Link
            to={"/history"}
            style={{ textDecoration: "none", color: "black" }}
            className="fs-5"
          >
            Watch History
          </Link>
        </h4>{" "}
      </div>
      <Row className="container-fluid w-100 ">
        <Col className="all-videos col-lg-8">
          <h3>All Videos</h3>
          <div className="videos w-100">
            <View uploadVideoServerResponse={uploadVideoServerResponse}/>
          </div>
        </Col>
        <Col className="Category col-lg-3">
          <Category />
        </Col>
      </Row>
    </>
  );
}

export default Home;
