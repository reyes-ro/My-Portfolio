import React from 'react'
import './Hero.css'
import MyPhotoJPSME from '../assets/MyPhotoJPSME.jpg'
import bubblechat from '../assets/bubblechat.svg'

const Hero = () => {
  return (
    <div className='Hero' style={{display:"flex"}}>
        {/* <a href="" target="_blank"> */}
        <a href="/">
            <img src={MyPhotoJPSME} className="my_photo" alt="myPhoto" width={"300px"} height={"300px"} />
        </a>
      <div className='Hero_Details'>
        <div className="Greet">
          <h1>Hi, I'm Ronald;</h1>

          <p className="description">
              Full-Stack Developer
          </p>

          <svg className="bubble_chat" viewBox="0 0 300 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

            <rect x="10" y="10" width="280" height="70" rx="15" ry="15" fill="transparent" stroke="#ccc" stroke-width="2"/>

            <polygon points="30,80 20,100 50,80" fill="transparent" stroke="#ccc" stroke-width="2"/>
          </svg>
    
        </div>

        <div className='landing'>
          <div className='btn btn--primary'>
            Learn More
          </div>
          
        </div>


        <div class="icon-buttons">
          <p>Visit at: </p>
          <a href="https://github.com/reyes-ro" class="icon-btn github" target="_blank" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.5-.7 1.7-1.1.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.3-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/ronald-reyes-014a22268/" class="icon-btn linkedin" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.1 1 2.49 1 4.98 2.12 4.98 3.5zM0 8.5h5v15h-5v-15zm7.5 0h4.7v2.1h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6v7.6h-5v-6.8c0-1.6-.03-3.6-2.2-3.6-2.2 0-2.6 1.7-2.6 3.5v6.9h-5v-15z"/>
            </svg>
          </a>

          <a href="https://www.facebook.com/ronald.a.reyes.361103" class="icon-btn facebook" target="_blank" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325V22.68c0 .732.593 1.325 1.325 1.325h11.488v-9.86H9.692v-3.84h3.121V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.796.716-1.796 1.767v2.317h3.588l-.467 3.84h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
        </div>
      
      </div>        

    </div>
  )
}

export default Hero