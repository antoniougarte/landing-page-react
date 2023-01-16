import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import new4 from '../assets/new4-img.png';
import AboutCards from '../components/AboutCards';

function About() {
  return (
    <>
      <Header/>
      <Hero 
    title="Learn more about us" 
    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    image={new4}/>
    <AboutCards/>
    </>
  )
}

export default About