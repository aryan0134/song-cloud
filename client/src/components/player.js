import React from 'react'
import './Player.css';
import * as FaIcons from 'react-icons/fa';

function Player(){
  return (
    <>
        <div className='Player-container'>
            <div className='PlayerArtist'>

            </div>
            <div className='PlayerButton'>
                <div className='Previous'></div>
                <div className='Play'>
                </div>
                <div className='Next'></div>
            </div>
            <div className='PlayerBar'>
                <div className='Barwrapper'>
                    <div className='Seekbar'></div>
                </div>

            </div>
        </div>
    </>
  )
}
function Slider(){
    return(
        <div className='slider-container'>
            <div className='progress-bar-cover'></div>
            <div className='thumb'></div>
            <input type='range' step='0.01' className='range'/>
        </div>
    )
}

export default Player; 