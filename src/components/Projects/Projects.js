import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [allProject, setAllProject] = useState([]);
    useEffect( ()=>{
        fetch("/projects.json")
        .then(res=>res.json())
        .then(data=>setAllProject(data));
    },[])
    return (
        <div id="projects">
            <div className="container">
            <h2 className="text-uppercase fw-bold">Projects</h2>

                <div className="row">
                    {
                        allProject.map(project => (
                       <Project key={project.id} project={project}></Project>
                        ))
                    }
                </div>
          
        </div>
        </div>
    );
};

export default Projects;