import React from 'react'
import MyPhotoJPSME from '../assets/MyPhotoJPSME.jpg'

const Hero = () => {
  return (
    <div className='Hero' style={{display:"flex"}}>
        {/* <a href="" target="_blank"> */}
        <a href="/">
            <img src={MyPhotoJPSME} className="my_photo" alt="myPhoto" width={"300px"} height={"300px"} />
        </a>
        <div className="Greet">
        <h1>Hi, I'm Ronald;</h1>

            <p className="description">
                Full-Stack Developer
            </p>
      </div>
    </div>
  )
}

export default Hero