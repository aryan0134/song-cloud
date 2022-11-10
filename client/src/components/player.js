import React, { useRef } from 'react'
import './Player.css';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';

function Player({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs, setCount}){
        const clickRef = useRef();
      
        const PlayPause = ()=>
        {
          setisplaying(!isplaying);
      
        }

        // const Play = ()=>
        // {
        //   setPlays(true);
      
        // }
      
        function increase(){
          setCount(1)
        }
      
        const checkWidth = (e)=>
        {
          let width = clickRef.current.clientWidth;
          const offset = e.nativeEvent.offsetX;
      
          const divprogress = offset / width * 100;
          audioElem.current.currentTime = divprogress / 100 * currentSong.length;
      
        }
      
        const skipBack = ()=>
        {
          const index = songs.findIndex(x=>x.title === currentSong.title);
          if (index === 0)
          {
            setCurrentSong(songs[songs.length - 1])
          }
          else
          {
            setCurrentSong(songs[index - 1])
          }
          audioElem.current.currentTime = 0;
          
        }
      
      
        const skiptoNext = ()=>
        {
          const index = songs.findIndex(x=>x.title === currentSong.title);
          if (index === songs.length-1)
          {
            setCurrentSong(songs[0])
          }
          else
          {
            setCurrentSong(songs[index + 1])
          }
          audioElem.current.currentTime = 0;
          
        }
  return (
    <>
        <div className='Player-container'>
            <div className='flex-1'>
                <div className='PlayerArtist'>
                  <img src={currentSong.image} alt="Network Error"/>
                  <div className='Upbotton' onClick={increase}>
                    <FaIcons.FaChevronCircleUp className='iconbtn'/>
                  </div>
                </div>
                <div className='PlayerName'><h1>{currentSong.title}</h1><h1>{currentSong.artist}</h1></div>
            </div>
            <div className='flex-2'>
                <div className='PlayerButton'>
                    <BsIcons.BsFillSkipStartCircleFill className='btn_action' onClick={skipBack} />
                    {isplaying ? <BsIcons.BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsIcons.BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
                    <BsIcons.BsFillSkipEndCircleFill className='btn_action' onClick={skiptoNext} />
                </div>
                <div className='PlayerBar'>
                    <div className='Barwrapper' onClick={checkWidth} ref={clickRef}>
                        <div className='Seekbar' style={{width: `${currentSong.progress+"%"}`}}></div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
export default Player;
