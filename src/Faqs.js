import React, { useState } from "react";

function Faqs() {
  const [showFull, setShowFull] = useState(false);
  const [showFull1, setShowFull1] = useState(false);
  const [showFull2, setShowFull2] = useState(false);
  const handleClick = () => {
    //alert("clicked");
    setShowFull(!showFull);
  };
  const handleClick1 = () => {
    //alert("clicked");
    setShowFull(!showFull1);
  };
  const handleClick2 = () => {
    //alert("clicked");
    setShowFull(!showFull2);
  };
  return (
    <div>
      <div
        className="container "
        style={{
          boxShadow: "0px 0px 4px",
          borderRadius: "15px",
          height: "10vw",
          marginTop: "5rem",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <h4
              className="fw-bold"
              style={{
                fontSize: "30px",
                paddingTop: "40px",
              }}
            >
              Velit venenatis pretium mattis consectetur massa pretium mattis ?
            </h4>
          </div>
          <div
            className="d-flex"
            style={{
              justifyContent: "end",
            }}
            onClick={handleClick}
          >
            <img
              src={` ${!showFull ? "arrow2.png" : "arrow3.png"}`}
              style={{
                width: "2rem",
                marginLeft: "8rem",
                marginTop:'50px'
              }}
              alt=""
            />
          </div>
          <div>
          </div> </div>
          <p className={` ${!showFull ? "d-none" : " "}`} >

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            temporibus inventore possimus doloribus enim repudiandae.
          </p>
          </div>
      
          <div
        className="container "
        style={{
          boxShadow: "0px 0px 4px",
          borderRadius: "15px",
          height: "10vw",
          marginTop: "5rem",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <h4
              className="fw-bold"
              style={{
                fontSize: "30px",
                paddingTop: "40px",
              }}
            >
              Velit venenatis pretium mattis consectetur massa pretium mattis ?
            </h4>
          </div>
          <div
            className="d-flex"
            style={{
              justifyContent: "end",
            }}
            onClick={handleClick1}
          >
            <img
              src={` ${!showFull1 ? "arrow2.png" : "arrow3.png"}`}
              style={{
                width: "2rem",
                marginLeft: "8rem",
                marginTop:'50px'
              }}
              alt=""
            />
          </div>
          <div>
          </div> </div>
          <p className={` ${!showFull1 ? "d-none" : " "}`} >

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            temporibus inventore possimus doloribus enim repudiandae.
          </p>
          </div>
      
          <div
        className="container "
        style={{
          boxShadow: "0px 0px 4px",
          borderRadius: "15px",
          height: "10vw",
          marginTop: "5rem",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <h4
              className="fw-bold"
              style={{
                fontSize: "30px",
                paddingTop: "40px",
              }}
            >
              Velit venenatis pretium mattis consectetur massa pretium mattis ?
            </h4>
          </div>
          <div
            className="d-flex"
            style={{
              justifyContent: "end",
            }}
            onClick={handleClick2}
          >
            <img
              src={` ${!showFull2 ? "arrow2.png" : "arrow3.png"}`}
              style={{
                width: "2rem",
                marginLeft: "8rem",
                marginTop:'50px'
              }}
              alt=""
            />
          </div>
          <div>
          </div> </div>
          <p className={` ${!showFull2 ? "d-none" : " "}`} >

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            temporibus inventore possimus doloribus enim repudiandae.
          </p>
          </div>
      
     
      
    </div>
  );
}

export default Faqs;
