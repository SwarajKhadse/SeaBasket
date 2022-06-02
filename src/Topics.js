import React from "react";
import './Topic.css'
function Topics() {
  return (
    <>
      <h1
        className="text-center fw-bold "
        style={{
          marginTop: "8rem",
          marginBottom: "5rem",
          fontSize: "3rem",
        }}
      >
        TOPICS YOU CAN'T MISS
      </h1>
      <div
        className="container "
        style={{
          boxShadow: "0px 0px 4px",
          borderRadius: "15px",
          height: "23vw",
          backgroundColor:"white"
        }}
      >
        <div className="row">
          <div className="col-7">
          <h4
            className="fw-bold"
            style={{
              fontSize: "30px",
              paddingTop: "40px",
              marginLeft: "2rem",
            }}
          >
            TOPICS YOU CAN'T MISS
          </h4>
          <h5
            style={{
              marginLeft: "2rem",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          >
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
            nisl adipiscing posuere et a. Tincidunt consectetur sapien
            pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
            massa felis, et. Cursus tortor ut fames sapien a vulputate amet
            malesuada.
          </h5>

          <a
            href="#"
            className=""
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              textDecoration: "none",
              marginLeft: "2rem",
              marginTop: "2rem",
            }}
          >
            READ MORE
            <img
              src="right.png"
              style={{
                width: "2rem",
              }}
              alt=""
            />
          </a>
          </div>

          <div className="col-5 imah">

          <img src="topic1.png" alt=""
          style={{
            width:"16vw",
            display:"flex",
            width:"104%"
          }} />
        </div>
        </div>
        
      </div>
      <div
        className="container mt-3"
        style={{
          boxShadow: "0px 0px 4px",
          borderRadius: "15px",
          height: "23vw",
          backgroundColor:"white"
        }}
      >
        <div className="row">
          <div className="col-7">
          <h4
            className="fw-bold"
            style={{
              fontSize: "30px",
              paddingTop: "40px",
              marginLeft: "2rem",
            }}
          >
         HOW TO CLEAN/CUT YOUR SEAFOOD
          </h4>
          <h5
            style={{
              marginLeft: "2rem",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          >
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
            nisl adipiscing posuere et a. Tincidunt consectetur sapien
            pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
            massa felis, et. Cursus tortor ut fames sapien a vulputate amet
            malesuada.
          </h5>

          <a
            href="#"
            className=""
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              textDecoration: "none",
              marginLeft: "2rem",
              marginTop: "2rem",
            }}
          >
            READ MORE
            <img
              src="right.png"
              style={{
                width: "2rem",
              }}
              alt=""
            />
          </a>
          </div>

          <div className="col-5 imah">

          <img src="topic2.png" alt=""
          style={{
            width:"16vw",
            display:"flex",
            width:"104%"
          }} />
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Topics;
