import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistory, viewHistory } from "../services/allAPI";

function History() {
  const [History, setHistory] = useState([]);

  const getAllwatchHistory = async () => {
    // make api call
    const { data } = await viewHistory();
    setHistory(data);
  };
  useEffect(() => {
    getAllwatchHistory();
  }, []);
  console.log(History);
  
const handleDeleteHistory= async(id)=>
{
//make api call
await deleteHistory(id)
getAllwatchHistory();
}

  return (
    <div>
      <>
        <div className="container mt-5 mb-5 justify-content-between ">
          <h3>Watch History</h3>
          <Link
            to={"/home"}
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
          >
            <i class="fa-solid fa-arrow-left-long"></i> Back to home
          </Link>
        </div>
        <table className="table border mt-5 mb-5 container">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {History.length > 0 ? (
              History.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.embedlink} target="_blank">{item?.embedlink}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><button onClick={()=>{handleDeleteHistory(item?.id)}} className="btn"> <i className="fa-solid fa-trash text-danger"> </i></button></td>
                </tr>
              ))
            ) : (
              <p className="fw-bolder mt-3 fs-5 text-danger">
                Nothing to Display !!
              </p>
            )}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default History;
