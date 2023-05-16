import React from 'react';
import './Project.css';

export default function ProjectCard({ project }) {
    return (
        <div className="col">
            <div className="card shadow-sm text-bg-dark">
                <img src={project.image} alt={project.title} className='card-img-top object-fit-cover' />
                <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-primary">
                                <a className='link-underline-opacity-0' target="_blank" rel='noreferrer' href={project.link_demo}>
                                    Demo
                                </a>
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                            <a className='link-secondary' target="_blank" rel='noreferrer' href={project.link_src}>
                                    Source
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
