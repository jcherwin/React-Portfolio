import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className='d-flex flex-row flex-wrap'>
      <h2 className='p-2 w-100'>About Me</h2>
      <img src='./img/headshot.jpg' alt='headshot' className='p-2 headshot align-self-start' />
      <p className='fs-4 about'>
        My name is Jon Cherwin. <br/><br/> 
        I’m a Full-Stack Web Developer with over 7 years of technical experience turning ideas into fast, scalable, and visually engaging digital products. <br/><br/>
        Always evolving, I stay at the forefront of new technologies to deliver results that drive growth and innovation.
      </p>
    </div>
  );
}
