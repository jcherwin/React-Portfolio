import React from 'react';
import { Clipboard } from 'react-bootstrap-icons';
import './resume.css';


export default function Resume() {
    return (
        <div>
            <h2 className='p-2'>Resume</h2>
            <div className='container d-flex flex-wrap'>
                <p className='w-100'>
                    Download my
                    <a className="ps-2 link-warning" href="./docs/Jon_Cherwin_Resume.pdf">
                        <Clipboard />
                        Resume
                    </a>
                </p>
                <div className='front-end'>
                    <h3 className='p-2'>Front-end Skills</h3>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Progressive Web Apps</li>
                        <li>MVC</li>
                        <li>Git</li>
                    </ol>
                </div>
                <div className='back-end'>
                    <h3 className='p-2'>Back-end Skills</h3>
                    <ol>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST API</li>
                        <li>Apollo</li>
                        <li>GraphQL</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
