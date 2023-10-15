import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteCategory,
  getAVideo,
  getAllCategory,
  saveCategory,
  updateCategory,
} from "../services/allAPI";
import VideoCard from "./VideoCard";

function Category() {
  const [allCategory, setAllCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos: [],
      };
      const response = await saveCategory(body);

      if (response.status >= 200 && response.status < 300) {
        // resetState
        setCategoryName("");
        // Fetch the updated category list after adding a new category
        handleGetCategory();
        // hide modal
        handleClose();
      } else {
        toast.warning(
          "Uploading Error....Perform the operation after sometime!!"
        );
      }
    } else {
      toast.info("Please provide category name!");
    }
  };

  const handleGetCategory = async () => {
    // make api call
    const { data } = await getAllCategory();
    setAllCategory(data);
    console.log(allCategory);
  };

  const handleDeleteCategory = async (id) => {
    // make api call
    await deleteCategory(id);
    // get all category
    handleGetCategory();
  };
  
  useEffect(() => {
    handleGetCategory();
  }, []);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDropped = async (e, categoryId) => {
    const videoCardId = e.dataTransfer.getData("cardId");
    const { data } = await getAVideo(videoCardId);
    const selectedCategory = allCategory.find((item) => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    await updateCategory(categoryId, selectedCategory);
    handleGetCategory(); 
  };

  return (
    <>
      <div className="d-grid">
        <Button onClick={handleShow} variant="primary">
          Add New Category
        </Button>
      </div>
      {allCategory.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="border mt-3 p-3 rounded"
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDropped(e, item?.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item?.categoryName}</h6>
              <button
                onClick={() => handleDeleteCategory(item?.id)}
                className="btn"
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            {item?.allVideos && (
              <Row>
                {item?.allVideos?.map((card) => (
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true} />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        ))
      ) : (
        <p className="fw-bolder mt-3 fs-5 text-danger">
          No categories are added!
        </p>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter category name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="light" />
    </>
  );
}

export default Category;
