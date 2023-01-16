import React from 'react'
import '../css/card.css';

function Card( {image, title, subtitle}) {
  return (
    <>
      <div className='card'>
        <div className='card__img'>
          <img src={image}></img>
        </div>
        <div className='card__text'>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      
    </>
  )
}

export default Card