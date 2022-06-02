import React from 'react'

function Footer() {
  return (
    <>
  <div className="row mt-3" style={{
    width:"100%",
    height:"20vw",
    backgroundColor:"blue"
  }}>
      <div className="col-6">
          <img src="logo main.png" alt="" 
          style={{
            marginLeft:"10rem",
            marginTop:"2rem"
          }}/>
      </div>
      <div className="col-3">
        <ul style={{
          listStyleType:"none",
           marginTop:"4rem"
        }}>
          <li style={
            {
              color:"white",
              fontWeight:"bold",
               fontSize:"20px",
               marginBottom:"10px"
            }
          }>
          Support
          </li>
          <li 
          style={
            {
              color:"white",
              fontWeight:"bold",
               fontSize:"20px",
               marginBottom:"10px"
            }
          }>About Us</li>
          <li 
          style={
            {
              color:"white",
              fontWeight:"bold",
               fontSize:"20px",
               marginBottom:"10px"
            }
          }>Privacy Policy</li>
        </ul>
      </div>
      <div className="col-3">
        <ul style={{
          listStyleType:"none",
           marginTop:"4rem"
        }}>
          <li style={
            {
              color:"white",
              fontWeight:"bold",
               fontSize:"20px",
               marginBottom:"10px"
            }
          }>
          Terms & Conditions
          </li>
          <li 
          style={
            {
              color:"white",
              fontWeight:"bold",
               fontSize:"20px",
               marginBottom:"10px"
            }
          }>Return & Refund Policy</li>
          <li 
          style={
            {
              color:"white",
              fontWeight:"bold",
               fontSize:"20px",
               marginBottom:"10px"
            }
          }>Shipping & Delivery Policy</li>
        </ul>
      </div>
      <p className='text-center' 
      style={
        {
          color:"white",
         
        }
      }>Sea Basket I All Rights Reserved I 2021 Copyright</p>
  </div>
    
    </>


  )
}

export default Footer