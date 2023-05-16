import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className='d-flex flex-row flex-wrap'>
      <h2 className='p-2 w-100'>About Me</h2>
      <img src='./img/headshot.jpg' alt='headshot' className='p-2 headshot align-self-start' />
      <p className='fs-4 about'>
        My name is Jon Cherwin. <br/><br/> 
        I am a Full-Stack Web developer who takes pride in building functional projects to serve a multitude of needs and interests. <br/><br/>
        I am always eager to improve my skills as well as learn new ones to improve my work.
      </p>
    </div>
  );
}
