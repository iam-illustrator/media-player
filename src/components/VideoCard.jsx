import React from "react";
import { Card, Modal } from "react-bootstrap";
import { useState } from "react";
import { addHistory, deleteASingleVideo } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VideoCard({ displayData, setDeleteSpecificVideo, insideCategory }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // get caption and link
    const { caption, embedlink } = displayData;
    // generate time stamp
    let today = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    let reqBody = {
      caption,
      embedlink,
      timeStamp,
    };
    // make api call
    await addHistory(reqBody);
  };

  // function for deleting a video
  const deleteSingleVideo = async (id) => {
    const response = await deleteASingleVideo(id);
    setDeleteSpecificVideo(true); // This should be working correctly
    toast.success(`Video deleted Successfully`);
  };
  const dragStarted = (e, id) => {
    console.log("drag started");
    e.dataTransfer.setData("cardId", id);
  };
  return (
    <>
      {displayData && (
        <Card className="mb-3">
          <Card.Img
            onClick={handleShow}
            className="w-100"
            variant="top"
            src={displayData?.url}
            style={{ height: "200px", objectFit: "cover" }}
            draggable
            onDragStart={(e) => dragStarted(e, displayData?.id)}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <h6>{displayData?.caption}</h6>
              {insideCategory ? (
                ""
              ) : (
                <button
                  onClick={() => deleteSingleVideo(displayData?.id)}
                  className="btn"
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              )}{" "}
            </Card.Title>
          </Card.Body>
        </Card>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title> {displayData?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width={"100%"}
            height={"400px"}
            src={`${displayData?.embedlink}?autoplay=1`}
            title={displayData?.caption}
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="light" />
    </>
  );
}

export default VideoCard;
