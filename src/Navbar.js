import React from 'react'

function Navbar() {
  return (
    <div className=''>
<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <img src="logo main.png" class="img-thumbnail" alt="..."
    style={{
      width:"140px",
      marginLeft:"30px",
      marginTop:"20px"
    }}/>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{
        marginLeft:"35rem"
      }}>
        <li className="nav-item ">
          <a className="nav-link active fw-bold fs-2 text-end" aria-current="page" href="#" style={{
            color:"blue",
            marginTop:"10px",
            textAlign:"right"
          }}>Category</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold fs-2" aria-current="page" href="#"  style={{
            color:"blue",
            marginTop:"10px",
            
          }}>FAQs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold fs-2" aria-current="page" href="#"  style={{
            color:"blue",
            marginTop:"10px",
            
          }}>My Cart</a>
        </li>
      </ul>
      <button type="button" className="btn btn-primary" style={{
        width:"140px"
      }}>Login</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar