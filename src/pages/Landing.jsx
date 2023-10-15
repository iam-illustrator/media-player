import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigateByUrl = useNavigate();
  const navigate = () => {
    navigateByUrl("/home");
  };
  return (
    <>
      <Row className="mt-5 mb-5 align-items-center justify-content-between">
        <Col></Col>
        <Col lg={4}>
          <h3 className="mb-3">
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            mollitia eum eligendi voluptatum unde maxime animi quis ad eaque
            cupiditate a quisquam nostrum iure iste itaque doloremque doloribus
            harum quo!
          </p>
          <Button onClick={navigate} variant="primary">
            Get Started
          </Button>
        </Col>
        <Col></Col>
        <Col className="ps-5" lg={6}>
          <img
            className="img-fluid ms-5 ps-5"
            src="https://img.freepik.com/free-vector/minimal-white-style-video-player-template-design_1017-25481.jpg?w=1060&t=st=1696963312~exp=1696963912~hmac=0824dbfc45f4bb775924c98342c13ed41825166c3afe83714ca511bed89ecfd8"
            alt=""
            width={"600px"}
          />
        </Col>
      </Row>
      <div className="container mt-5  mt-5 mb-5 d-flex justify-content-center flex-column align-items-center">
        <h3>Features</h3>
        <div className="cards mt-3 align-items-center w-100 d-flex justify-content-between">
          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img
              height={"300px"}
              width={"300px"}
              variant="top"
              src="https://img.freepik.com/premium-vector/viral-video-advertisement-make-manager-man-vector-viral-video-marketing-advertising-making-blogger-marketer-online-social-media-networks-character-boy-flat-cartoon-illustration_87720-6000.jpg?w=2000"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="p-3 " style={{ width: "22rem" }}>
            <Card.Img
              height={"300px"}
              width={"300px"}
              variant="top"
              src="https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4358.jpg?w=740&t=st=1696441763~exp=1696442363~hmac=6cefc6b7dd5c9ba638f4fb63538d739b020645bcad5aa74ee7ca09d0490fbbdc"
            />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="p-3 " style={{ width: "22rem" }}>
            <Card.Img
              height={"300px"}
              width={"300px"}
              variant="top"
              src="https://img.freepik.com/free-vector/press-pause-concept-illustration_114360-5948.jpg?w=740&t=st=1696441839~exp=1696442439~hmac=4e38bfcb1cad081a058056737118be69aa09b2a757290fb560b1d61164a1b30c"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mt-5 mb-5 d-flex justify-content-between w-100 p-5 border-secondary rounded align-items-center">
        <div className="content w-50">
          <h3 className="text-warning mb-3">Simple,Fast and powerful</h3>
          <h6 className="mt-5">
            <span className="fs-5 fw-bolder">Play Everything :</span> Lorem i
            Perferendis maiores, saepe sunt eos voluptatibus omnis eius fugiat
            accusamus cupiditate facilis minus sapiente corrupti, dignissimos
            exercitationem aut provident quas aspernatur reprehenderit.
          </h6>
          <h6 className="mt-4">
            <span className="fs-5 fw-bolder">Categorise Videos :</span> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
            maiores, saepe sunt eos voluptatibus omnis eius fugiat accusamus
            cupiditate dignissimos exercitationem aut provident quas aspernatur
            reprehenderit.
          </h6>
          <h6 className="mt-4">
            <span className="fs-5 fw-bolder"> Managing History :</span> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
            maiores, saepe sunt eos voluptatibus omnis eius fugiat accusamus
            cupiditate facilis minus sapiente corrupti, dignissimos
            exercitationem aut provident quas aspernatur reprehenderit.
          </h6>
        </div>
        <div className="video ms-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VAdGW7QDJiU?si=FOC1EtYuJI6p0zS1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Landing;
