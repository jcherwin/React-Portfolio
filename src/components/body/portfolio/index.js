import React from 'react';
import { projects } from "../../data/projects";
import ProjectCard from './ProjectCard';

export default function Portfolio() {
    return (
        <div>
            <h2 className='p-2'>Portfolio</h2>
            <div className="album py-3 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {projects.map((project) => {
                            return <ProjectCard project={project} key={project.id} />;
                        })}                        
                    </div>
                </div>
            </div>
        </div>
    );
}
