import React from 'react'
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="aboutlogo">
        <h1 className="title">About</h1>
      </div>
      <div className="aboutpara">
        <p className="para">  
          <h2>
            Hi! Welcome to SongCloud, 
            Thanks for landing on it!  
          </h2>
          <br></br>
          <h3>
            Songcloud will help you listen to your favourite music. You can listen to your favorite artist and playlists, explore what music you like, and connect to your favorite artist and track.
            Immerse in the cloud of different songs and discover all new playlists according to your preference.
            Listen to pleasant sound which is a combination of melodies and harmony and which soothes your mood and feel the rhythm of your soul.
            Hope your enjoy your new journey to SongCloud.        
            </h3>

        </p>
      </div>
      <div className="developer1">
        <div className="flex1">
          <div className='heading'>
            <h1>Developers</h1>
          </div>
        </div>

        <div className="flex2">
          <div className='kutchbhi'>
            <div className='image1'></div>
            <div className='Name1'> <h1> Bhavik </h1> </div>
          </div>
          <div className='kutchbhi'>
            <div className='image2'></div>
            <div className='Name1'> <h1> Ayusha </h1> </div>
          </div>
          <div className='kutchbhi'>
            <div className='image3'></div>
            <div className='Name1'> <h1> Aryan </h1> </div>
          </div>
          <div className='kutchbhi'>
            <div className='image4'></div>
            <div className='Name1'> <h1> Yash </h1> </div>
          </div>
        </div>
        {/* <div className='image2'>
          <div className='Name1'> <h1> Ayusha </h1> </div>
        </div>
        <div className='image3'>
          <div className='Name1'> <h1> Aryan </h1> </div>
        </div>
        <div className='image4'>
          <div className='Name1'> <h1> Yash </h1> </div>
        </div> */}


      </div>
    </div>
  )
}

export default About