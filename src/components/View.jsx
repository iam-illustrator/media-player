import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Videocard from "./VideoCard";
import { getAllVideos } from "../services/allAPI";
function View({uploadVideoServerResponse}) {
  const [allVideos, setAllVideos] = useState([]);
  const[deleteSpecificVideo,setDeleteSpecificVideo] = useState(false);
  const getAllUploadVideos = async () => {
    //make api call
    const { data } = await getAllVideos(); // cant use data (variable) outside the function
    setAllVideos(data); //so we've created a state for storing videos
  };

  useEffect(() => {
    setDeleteSpecificVideo(false)
    getAllUploadVideos()
  }, [uploadVideoServerResponse,deleteSpecificVideo]);

  console.log(allVideos);
  return (
    <Row>
      {allVideos?.length> 0 ? (
        allVideos?.map((video) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Videocard displayData={video} setDeleteSpecificVideo={setDeleteSpecificVideo}/>
          </Col>
        ))
      ) : (
        <p className="fw-bolder mt-3 fs-5 text-danger">Nothing to Display !!</p>
      )}
    </Row>
  );
}

export default View;