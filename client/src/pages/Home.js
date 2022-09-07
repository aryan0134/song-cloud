import React from 'react'
import { Homecontainer } from '../components/Homecontainer';
import { Homeblock } from '../components/Homeblock';
import './Home.css';
import uuid from 'react-uuid';

function Home() {

  return (
    <>
        {
          Homecontainer.map((item,index) => {
            return(
              <div key={uuid()} className={item.cName}>
                <div key={uuid()} className={item.cName2}>
                  <h1 className='hometitle'>
                  {
                      item.title
                    }
                  </h1>
                </div>
                <div key={uuid()} className={item.cName3}>
                  {Homeblock.map((item, index) => {
                    return(
                      <div key={index} className={item.cName} >
                        <img key={uuid()} src={item.image} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }) 
        }
    </>
    // <div className="home">
    //   <div className="container1">
    //     <div className='block1'></div>
    //     <div className='block2'></div>
    //     <div className='block3'></div>
    //     <div className='block4'></div>
    //     <div className='block5'></div>
    //   </div>
    //   <div className="container2">
    //     <div className='block6'></div>
    //     <div className='block7'></div>
    //     <div className='block8'></div>
    //     <div className='block9'></div>
    //     <div className='block10'></div>
    //   </div>
    //   <div className="container3">
    //     <div className='block11'></div>
    //     <div className='block12'></div>
    //     <div className='block13'></div>
    //     <div className='block14'></div>
    //     <div className='block15'></div>
    //   </div>

    // </div>
  )
}

export default Home