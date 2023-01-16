import React from 'react'
import Card from './Card'
import tricktreat2 from '../assets/trick-treat2-img.png';
import tricktreat3 from '../assets/trick-treat3-img.png';
import tricktreat4 from '../assets/trick-treat4-img.png';
import '../css/about-cards.css';


function AboutCards() {
  return (
    <>
    <div className='about-cards my-5'>
      <Card 
      image={tricktreat2} 
      title="big surprises" 
      subtitle="It is a long established fact that a reader will be distracted by the readable"/>

      <Card 
      image={tricktreat3} 
      title="many candies" 
      subtitle="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"/>

      <Card 
      image={tricktreat4} 
      title="many candies" 
      subtitle="There are many variations of passages of Lorem Ipsum available,"/>
    </div>
    </>
  )
}

export default AboutCards