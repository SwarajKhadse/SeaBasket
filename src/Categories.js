import React from "react";

function Categories() {
  return (
    <>
      <div>
        <h1 style={{
          marginLeft:"10rem",
          marginBottom:"3rem"
        }}>CATEGORIES</h1>
        <div className="d-flex justify-content-evenly">
          <div className="card  " style={{ width: "22rem" ,borderRadius:"2rem" ,boxShadow:"0px 0px 3px"}}>
            <img
              src="Rectangle 3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-center "style={{
                marginTop:"-20px"
              }}>FISH</h4>
            </div>
          </div>
          <div className="card  " style={{ width: "22rem"  ,borderRadius:"2rem"  ,boxShadow:"0px 0px 3px"}}>
            <img
              src="scorpio.png"
              className="card-img-top mt-3"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-center" style={{
                marginTop:"20px"
              }}>CRUSTANCEANS</h4>
            </div>
          </div>
          <div className="card  " style={{ width: "22rem" ,borderRadius:"2rem"  ,boxShadow:"0px 0px 3px"}}>
            <img
              src="third.png"
              className="card-img-top mt-3"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-center">EXOTIC</h4>
            </div>
          </div>
       

        </div>
      </div>
    </>
  );
}

export default Categories;
