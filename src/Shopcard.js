import React from "react";
import "./Shopcard.css"
function Shopcard(props) {
  return (

    
            <div className='container ' style={{
              boxShadow:"0px 0px 4px",
              borderRadius:"15px",
              height:"20vw",
              
             backgroundColor:"white"
            }}>
            <h4 className='fw-bold' style={{
                fontSize:"30px",
                paddingTop:"40px",
                marginLeft:"2rem"
               
            }}>{props.title}
            </h4> 
            <h5 style={{
              marginLeft:"2rem",
              marginTop:"2rem",
              marginBottom:"3rem"
            }}>Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.</h5>
    
            <a href="#" className="" 
             style={{
              fontWeight:"bold",
              fontSize:"26px",
              textDecoration:"none",
                   marginLeft:"54rem",
                   marginTop:"2rem"
              
            }}>READ MORE 
            <img src="right.png" style={{
          width:"2rem",
     
        
        }} alt=""  /></a>
             </div>
  );
}

export default Shopcard;
