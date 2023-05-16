import React from 'react';
import { Github, Linkedin, StackOverflow } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className='d-flex justify-content-center mx-auto my-5 w-50'>
            <a className='p-4 link-secondary' target="_blank" rel='noreferrer' href='https://github.com/jcherwin'>
                <Github size={48} />
            </a>
            <a className='p-4 link-secondary' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jon-cherwin/'>
                <Linkedin size={48} />
            </a>
            <a className='p-4 link-secondary' target="_blank" rel='noreferrer' href='https://stackoverflow.com/users/21851676/jcherwin'>
                <StackOverflow size={48} />
            </a>
        </div>
    );
}
