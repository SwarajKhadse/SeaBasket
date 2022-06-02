import React from 'react'
import './Video.css'
function Video() {
  return (
    <div>
    <h1 className='text-center fw-bold' style={{
      marginTop:"10rem",
      fontSize:"3rem",
      marginBottom:"2rem"
    }}>A GLANCE AT OUR PRODUCT</h1>
   <div className="video-bag">
    <video width="900" height="500" controls>
    <source src="fish.mp4" type="video/mp4"/>
    </video> 
    </div>
      
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/lqxMyk31xII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  )
}

export default Video