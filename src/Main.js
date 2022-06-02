import React from 'react'
import Categories from './Categories'
import Navbar from './Navbar'
import Video from './Video'
import Faqs from './Faqs'
import Read from './Read'
import Topics from './Topics'
import Footer from './Footer'
import Poster from './Poster'
import QRCode from "react-qr-code";
function Main() {
  return (
    <div>
        <Navbar/>
        
        <Poster/>
        <h1 className='text-center '>HOW IT WORKS</h1>
        <h4 className='text-center mt-3 ' style={{
          marginBottom:"70px"
        }}>Sea Basket delivers fresh sourced seafood in a few easy clicks</h4>
        <Categories/>
        <Video/>
        <Faqs/>
        <Read/>
        <Topics/>
        <Footer/>
        
    </div>
  )
}

export default Main