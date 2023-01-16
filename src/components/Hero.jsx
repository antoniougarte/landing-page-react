import React from 'react'
import '../css/hero.css';

function Hero({title, description, image}) {
  return (
    <>
      <main className='main'>
        <div className='container px-5'>
          <div className='main__grid'>
            <div className='main__grid__text'>
              <h1>{title}</h1>
              <p>{description}</p>
              <button className='main__grid__btn'>Learn More</button>

            </div>
            <div className='main__grid__img'>
              <img src={image}></img>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero